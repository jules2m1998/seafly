export default {
    spliter (txt) {
        let h = txt.split('\n\n');
        for (let i = 0; i < h.length; i++){
            h[i] = h[i].split('\n');
        }
        return h;
    }
}