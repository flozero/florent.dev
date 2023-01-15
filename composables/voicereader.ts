import { Ref } from "nuxt/dist/app/compat/capi"

export function useVoiceReader() {
    const synth: Ref<null | SpeechSynthesis>  = ref(null)
    const voices: Ref<SpeechSynthesisVoice[] | []> = ref([])
    const voiceSelected: Ref<SpeechSynthesisVoice | null> = ref(null)
    const isPending = ref(false)
    const isPaused = ref(false)
    const errored = ref(false)

    // const populateVoiceList = () => {
    //   const _found = synth.value?.getVoices().find(function (v) {
    //     return v.name.includes("Samantha")
    //   });
    //   if (!_found) {
    //     errored.value = true
    //   } else {
    //     voiceSelected.value = _found
    //   }
    // }

    const read = () => {
      if (synth.value?.speaking) {
        console.error("speechSynthesis.speaking");
        return;
      }      
      const _text = document.querySelector("#content-to-read")?.innerText
      _text.replace("\"\"", "")
      const utterThis = new SpeechSynthesisUtterance(_text);
    
      utterThis.onend = () => {
        cancel()
      };
    
      utterThis.onerror = () => {
        cancel()
      };

      // utterThis.voice = unref(voiceSelected)
      utterThis.pitch = 1;
      utterThis.rate = 0.9;
      synth.value?.speak(utterThis);
      isPending.value = true
      isPaused.value = false
    }

    const pause = () => {
      synth.value?.pause();
      isPending.value = true
      isPaused.value = true
    }

    const resume = () => {
      synth.value?.resume();
      isPending.value = true
      isPaused.value = false
    }

    const cancel = () => {
      synth.value?.cancel();
      isPending.value = false
      isPaused.value = false
    }

    onDeactivated(() => {
      synth.value = null
    })

    onMounted(() => {
      synth.value = window.speechSynthesis;

      // setTimeout(() => {
      //   populateVoiceList()
      // }, 250)
  })
    
    return {
        cancel,
        pause,
        resume,
        voiceSelected,
        voices,
        synth,
        read,
        isPending,
        isPaused,
        errored
    }
}