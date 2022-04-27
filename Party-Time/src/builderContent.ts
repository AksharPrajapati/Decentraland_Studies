import { createChannel } from "../node_modules/decentraland-builder-scripts/channel";
import Script1 from "../3f3fe65b-c648-44bc-8781-c2a40bc95bb4/src/item";

export function buildScene() {
  const _scene = new Entity("_scene");
  engine.addEntity(_scene);
  const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  _scene.addComponentOrReplace(transform);

  const entity = new Entity("entity");
  engine.addEntity(entity);
  entity.setParent(_scene);
  const gltfShape = new GLTFShape(
    "models/FloorBaseGrass_01/FloorBaseGrass_01.glb"
  );
  gltfShape.withCollisions = true;
  gltfShape.isPointerBlocker = true;
  gltfShape.visible = true;
  entity.addComponentOrReplace(gltfShape);
  const transform2 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  entity.addComponentOrReplace(transform2);

  const classicBench = new Entity("classicBench");
  engine.addEntity(classicBench);
  classicBench.setParent(_scene);
  const transform3 = new Transform({
    position: new Vector3(12.5, 0, 11.5),
    rotation: new Quaternion(
      0,
      -0.2902846932411194,
      3.4604628496026635e-8,
      0.9569403529167175
    ),
    scale: new Vector3(1, 1, 1),
  });
  classicBench.addComponentOrReplace(transform3);
  const gltfShape2 = new GLTFShape("models/Bench_01/Bench_01.glb");
  gltfShape2.withCollisions = true;
  gltfShape2.isPointerBlocker = true;
  gltfShape2.visible = true;
  classicBench.addComponentOrReplace(gltfShape2);

  const bluePinkMysticalMushroomTree = new Entity(
    "bluePinkMysticalMushroomTree"
  );
  engine.addEntity(bluePinkMysticalMushroomTree);
  bluePinkMysticalMushroomTree.setParent(_scene);
  const transform4 = new Transform({
    position: new Vector3(12.5, 0, 3.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  bluePinkMysticalMushroomTree.addComponentOrReplace(transform4);
  const gltfShape3 = new GLTFShape("models/Tree_02/Tree_02.glb");
  gltfShape3.withCollisions = true;
  gltfShape3.isPointerBlocker = true;
  gltfShape3.visible = true;
  bluePinkMysticalMushroomTree.addComponentOrReplace(gltfShape3);

  const barbacue = new Entity("barbacue");
  engine.addEntity(barbacue);
  barbacue.setParent(_scene);
  const transform5 = new Transform({
    position: new Vector3(5.5, 0, 14),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  barbacue.addComponentOrReplace(transform5);
  const gltfShape4 = new GLTFShape("models/Barbacue_01/Barbacue_01.glb");
  gltfShape4.withCollisions = true;
  gltfShape4.isPointerBlocker = true;
  gltfShape4.visible = true;
  barbacue.addComponentOrReplace(gltfShape4);

  const ancientMediumStonePath = new Entity("ancientMediumStonePath");
  engine.addEntity(ancientMediumStonePath);
  ancientMediumStonePath.setParent(_scene);
  const transform6 = new Transform({
    position: new Vector3(8.5, 0, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  ancientMediumStonePath.addComponentOrReplace(transform6);
  const gltfShape5 = new GLTFShape(
    "models/RockFloor_Module_2M/RockFloor_Module_2M.glb"
  );
  gltfShape5.withCollisions = true;
  gltfShape5.isPointerBlocker = true;
  gltfShape5.visible = true;
  ancientMediumStonePath.addComponentOrReplace(gltfShape5);

  const ancientMediumStonePath2 = new Entity("ancientMediumStonePath2");
  engine.addEntity(ancientMediumStonePath2);
  ancientMediumStonePath2.setParent(_scene);
  ancientMediumStonePath2.addComponentOrReplace(gltfShape5);
  const transform7 = new Transform({
    position: new Vector3(6, 0, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  ancientMediumStonePath2.addComponentOrReplace(transform7);

  const ancientMediumStonePath3 = new Entity("ancientMediumStonePath3");
  engine.addEntity(ancientMediumStonePath3);
  ancientMediumStonePath3.setParent(_scene);
  ancientMediumStonePath3.addComponentOrReplace(gltfShape5);
  const transform8 = new Transform({
    position: new Vector3(4, 0, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  ancientMediumStonePath3.addComponentOrReplace(transform8);

  const shrub = new Entity("shrub");
  engine.addEntity(shrub);
  shrub.setParent(_scene);
  const transform9 = new Transform({
    position: new Vector3(4.5, 0, 3),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  shrub.addComponentOrReplace(transform9);
  const gltfShape6 = new GLTFShape("models/Bush_01/Bush_01.glb");
  gltfShape6.withCollisions = true;
  gltfShape6.isPointerBlocker = true;
  gltfShape6.visible = true;
  shrub.addComponentOrReplace(gltfShape6);

  const shrub2 = new Entity("shrub2");
  engine.addEntity(shrub2);
  shrub2.setParent(_scene);
  const transform10 = new Transform({
    position: new Vector3(3.5, 0, 15),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  shrub2.addComponentOrReplace(transform10);
  shrub2.addComponentOrReplace(gltfShape6);

  const balsamFlower = new Entity("balsamFlower");
  engine.addEntity(balsamFlower);
  balsamFlower.setParent(_scene);
  const transform11 = new Transform({
    position: new Vector3(11.5, 0, 2.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  balsamFlower.addComponentOrReplace(transform11);
  const gltfShape7 = new GLTFShape("models/Plant_02/Plant_02.glb");
  gltfShape7.withCollisions = true;
  gltfShape7.isPointerBlocker = true;
  gltfShape7.visible = true;
  balsamFlower.addComponentOrReplace(gltfShape7);

  const sunflowerHead = new Entity("sunflowerHead");
  engine.addEntity(sunflowerHead);
  sunflowerHead.setParent(_scene);
  const transform12 = new Transform({
    position: new Vector3(1.5, 0, 14),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  sunflowerHead.addComponentOrReplace(transform12);
  const gltfShape8 = new GLTFShape("models/Flower_01/Flower_01.glb");
  gltfShape8.withCollisions = true;
  gltfShape8.isPointerBlocker = true;
  gltfShape8.visible = true;
  sunflowerHead.addComponentOrReplace(gltfShape8);

  const signpostRoot = new Entity("signpostRoot");
  engine.addEntity(signpostRoot);
  signpostRoot.setParent(_scene);
  const transform13 = new Transform({
    position: new Vector3(11.5, 0, 14),
    rotation: new Quaternion(
      -5.853939566164562e-15,
      -0.9807853698730469,
      1.1691872003893877e-7,
      0.19509032368659973
    ),
    scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373),
  });
  signpostRoot.addComponentOrReplace(transform13);

  const theLonelyFountain = new Entity("theLonelyFountain");
  engine.addEntity(theLonelyFountain);
  theLonelyFountain.setParent(_scene);
  const transform14 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  theLonelyFountain.addComponentOrReplace(transform14);
  const gltfShape9 = new GLTFShape("models/Fountain_03/Fountain_03.glb");
  gltfShape9.withCollisions = true;
  gltfShape9.isPointerBlocker = true;
  gltfShape9.visible = true;
  theLonelyFountain.addComponentOrReplace(gltfShape9);

  const channelId = Math.random().toString(16).slice(2);
  const channelBus = new MessageBus();

  const script1 = new Script1();
  script1.init();
  script1.spawn(
    signpostRoot,
    { text: "Party at 9 PM\nGMT +3", fontSize: 24 },
    createChannel(channelId, signpostRoot, channelBus)
  );
}
