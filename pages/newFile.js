export default (await import('vue')).defineComponent({
components: {
ImageMap
},
data() {
return {
spot: {
id: 1,
name: "大阪城",
description: "大阪城は..."
}
// 他の観光名所も同様に追加
};
}
});
