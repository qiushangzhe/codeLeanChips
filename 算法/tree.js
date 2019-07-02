const data = [
  { id: 1, name: '父节点1', isRoot: true, pId: null },
  { id: 2, name: '父节点2', isRoot: true, pId: null },
  { id: 3, name: '子节点1', isRoot: false, pId: 1 },
  { id: 4, name: '子节点2', isRoot: false, pId: 2 },
  { id: 5, name: '子节点3', isRoot: false, pId: 3 },
  { id: 6, name: '子节点4', isRoot: false, pId: 3 },
  { id: 7, name: '子节点5', isRoot: false, pId: 4 },
  { id: 8, name: '子节点6', isRoot: false, pId: 4 },
  { id: 9, name: '子节点7', isRoot: false, pId: 6 },
]
const buffer = data.map(item => { item.child = []; return item; });
const rootNodes = buffer.filter(item => { return item.isRoot; });
const childNodes = buffer.filter(item => { return !item.isRoot; });

function init(plist, list) {
  if(plist.length <= 0) {return;}
  for (const rootNode of plist) {
    const childBuffer = checkHasChild(rootNode, list)
    if(childBuffer.length>0) {
      rootNode.child = childBuffer;
      init(childBuffer,list)
    }
  }
}

function checkHasChild(node,listData) {
  const buffer = [];
  for(const item of listData) {
    if(node.id === item.pId) {
      buffer.push(item);
    }
  }
  return buffer;
}

init(rootNodes,childNodes)

console.dir(rootNodes,{depth: 10})
