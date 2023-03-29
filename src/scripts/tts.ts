const baseUrl = "https://www.tetyys.com/SAPI4/SAPI4";

enum Voice{
    Sam = "Sam",
    BB = "Adult Male #2, American English (TruVoice)"
}

async function getTTS(voice: Voice, text: String, pitch: number, speed: number){
    const response = await fetch(`${baseUrl}?text=${text}&voice=${voice}&pitch=${pitch}&speed=${speed}`)
        .then(r => r.json());
    console.log(response);
    return response;
}

export {baseUrl, getTTS, Voice}