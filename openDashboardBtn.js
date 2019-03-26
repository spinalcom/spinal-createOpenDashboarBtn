import {
  SpinalDrive_App
} from "spinal-env-drive-core";

let spinalDrive_Env = window.spinalDrive_Env;

class SpinalOpenDashboard extends SpinalDrive_App {
  constructor() {
    super("OpenDashBoard", "Open Dashboard", "openDashboard_123",
      "dashboard");
  }



  action(obj) {
    console.log(obj);
  }

}

spinalDrive_Env.add_applications('FileExplorer', new SpinalOpenDashboard());