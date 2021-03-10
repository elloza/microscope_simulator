/**
 * サンプルリストをselectタグ内に追加する
 * @param {*} state
 */
export default function showSampleList(state, response) {
    return new Promise(async (res, rej) => {

        const savedSampleNames = state.storedKeys;

        const sampleList = response["list_of_sample"];
        const sampleSelectDOM = document.querySelector("#rock_selector");
        sampleSelectDOM.innerHTML = "<option value='' disabled selected style='display:none;'>Seleccione muestra</option>";
        const options = sampleList.map((v, i) => {
            const option = document.createElement("option")
            option.value = v["package-name"];
            option.innerHTML = (savedSampleNames.includes(v["package-name"]) ? "✓ " : "") + `${i + 1}. ${v["list-name"][state.language]}`
            if (savedSampleNames.includes(v["package-name"])) {
                option.classList.add("downloaded")
            }
            return option
        })
        options.forEach(v => {
            sampleSelectDOM.appendChild(v)
        })

        document.querySelector("#top-navigation").classList.add("isready");
        sampleSelectDOM.classList.add("isready")
        res(state);
    })
}
