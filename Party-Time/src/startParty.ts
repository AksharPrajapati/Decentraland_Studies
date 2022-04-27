export function startParty() {
  // music audio stream
  const streamSource = new Entity();
  engine.addEntity(streamSource);
  // streamSource.addComponent(
  //   new Transform({ position: new Vector3(56, 10, 55) })
  // );
  const music = new AudioSource(new AudioClip("sounds/jazzMuffled.mp3"));
  streamSource.addComponent(music);
  music.playing = true;
  music.loop = true;
  // streamSource.getComponent(AudioSource).playing = true;
  // streamSource.getComponent(AudioSource).loop = true;
  // music.playing = true;

  // video stream for textures

  // const musicVideo = new VideoTexture(
  //   new VideoClip(
  //     "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  //   )
  // );
  // musicVideo.playing = true;

  // const musicVideoMaterial = new Material();
  // musicVideoMaterial.albedoTexture = musicVideo;
  // musicVideoMaterial.roughness = 1;

  // const screen = new Entity();
  // engine.addEntity(screen);
  // screen.addComponent(new PlaneShape());
  // screen.addComponent(
  //   new Transform({
  //     position: new Vector3(8, 5, 8),
  //     scale: new Vector3(6, 3, 3),
  //   })
  // );
  // screen.addComponent(musicVideoMaterial);

  // instance rotating shapes with video clip texture

  // const flashScreen = new Entity();
  // flashScreen.addComponent(new BoxShape());
  // flashScreen.addComponent(
  //   new Transform({
  //     position: new Vector3(8, 5, 8),
  //     rotation: Quaternion.Euler(45, 0, 45),
  //     scale: new Vector3(2, 2, 2),
  //   })
  // );
  // flashScreen.addComponent(musicVideoMaterial);
  // engine.addEntity(flashScreen);

  // const smallCube1 = new Entity();
  // smallCube1.addComponent(new BoxShape());
  // smallCube1.addComponent(
  //   new Transform({
  //     position: new Vector3(3, 2, 3),
  //     rotation: Quaternion.Euler(45, 0, 45),
  //     scale: new Vector3(1, 1, 1),
  //   })
  // );
  // smallCube1.addComponent(musicVideoMaterial);
  // engine.addEntity(smallCube1);

  // const smallCube2 = new Entity();
  // smallCube2.addComponent(new BoxShape());
  // smallCube2.addComponent(
  //   new Transform({
  //     position: new Vector3(13, 4, 13),
  //     rotation: Quaternion.Euler(45, 0, 45),
  //     scale: new Vector3(1, 1, 1),
  //   })
  // );
  // smallCube2.addComponent(musicVideoMaterial);
  // engine.addEntity(smallCube2);

  // const cone1 = new Entity();
  // cone1.addComponent(new ConeShape());
  // cone1.addComponent(
  //   new Transform({
  //     position: new Vector3(13, 8, 3),
  //     rotation: Quaternion.Euler(55, 42, 38.7),
  //     scale: new Vector3(1.5, 1.5, 1.5),
  //   })
  // );
  // cone1.addComponent(musicVideoMaterial);
  // engine.addEntity(cone1);

  // // System to keep cubes rotating
  // class RotatorSystem implements ISystem {
  //   cubeRotate: Vector3 = new Vector3(0, 0, 1);
  //   coneRotate: Vector3 = new Vector3(1, 0, 1);
  //   update(dt: number) {
  //     const cone1Transform = cone1.getComponent(Transform);
  //     cone1Transform.rotate(this.coneRotate, dt * 10);

  //     const screenTransform = flashScreen.getComponent(Transform);
  //     screenTransform.rotate(this.cubeRotate, dt * 10);

  //     const small1Transform = smallCube1.getComponent(Transform);
  //     small1Transform.rotate(this.cubeRotate, dt * 20);

  //     const small2Transform = smallCube2.getComponent(Transform);
  //     small2Transform.rotate(this.cubeRotate, dt * 20);
  //   }
  // }

  // // Add a new instance of the system to the engine
  // engine.addSystem(new RotatorSystem());
}
