
figma.showUI(__html__);
figma.ui.resize(500,500);

figma.ui.onmessage = async(pluginMessage) => {
  await figma.loadFontAsync({ family: "Rubik", style: "Regular"})
  //testing adjust view by object ID
  const testArr = [];
  const selection = pluginMessage.radioValue - 1;
  //create an array of tags within the doc
  const tags = figma.root.findAll(n => n.type === "FRAME" && n.name.includes("Signpost"));

  console.log(tags);
  //move viewframe to center that tag
  testArr.push(tags[selection]);

  figma.viewport.scrollAndZoomIntoView(testArr);

  figma.closePlugin();
  
}

