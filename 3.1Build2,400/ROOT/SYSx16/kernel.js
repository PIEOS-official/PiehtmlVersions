const WebOSKernel = {
    root: {
        "DosShell": {
            type: "folder",
            icon: "NAN.png",
            contents: {
                "disk2.html": { type: "file", extension: "html", icon: "gar.png" },
                "disk1.html": { type: "file", extension: "html", icon: "gar.png" }
            }
        },
        "DiskDrive D": {
            type: "folder",
            icon: "fdi.png",
            contents: {
                "L DIR": { type: "file", extension: "html", icon: "NAN.png" },
                "disk2.html": { type: "file", extension: "html", icon: "gar.png" },
                "disk1.html": { type: "file", extension: "html", icon: "gar.png" }
            }
        },
        "FlopyDrive A": {
            type: "folder",
            icon: "fdi.png",
            contents: {
                "L DIR": { type: "file", extension: "html", icon: "NAN.png" },
                "disk2.html": { type: "file", extension: "html", icon: "gar.png" },
                "disk1.html": { type: "file", extension: "html", icon: "gar.png" }
            }
        },
        "SYSx16": {
            type: "folder",
            icon: "pie.ico",
            contents: {
                "L DIR": { type: "file", extension: "html", icon: "NAN.png" },
                "ABXx16FW.html": { type: "file", extension: "html", icon: "fil.png" },
                "componentManAger.html": { type: "file", extension: "html", icon: "FW.png" },
                "kernel.js": { type: "file", extension: "js", icon: "kern.ico" },
                "ABXx16FW.js": { type: "file", extension: "js", icon: "jsfile.png" },
                "splash.sys": { type: "file", extension: "sys", icon: "sysfile.png" },
                "boot.img": { type: "file", extension: "img", icon: "pie.ico" }
            }
        },
    },

    boot() {
        console.log("Booting Web OS 3.1...");
        this.loadKernel();
    },

    loadKernel() {
        console.log("Loading kernel...");
        if (this.root.SYSx16.contents["kernel.js"]) {
            console.log("Kernel loaded successfully.");
            this.initSystem();
        } else {
            console.error("Kernel file missing. Unable to boot.");
        }
    },

    initSystem() {
        console.log("Initializing system components...");
        // Additional startup logic here
        console.log("System ready.");
    },

    listContents(folder) {
        if (this.root[folder]) {
            console.log(`Contents of ${folder}:`, Object.keys(this.root[folder].contents));
        } else {
            console.error(`Folder ${folder} not found.`);
        }
    },

    openFile(folder, file) {
        if (this.root[folder] && this.root[folder].contents[file]) {
            console.log(`Opening ${file} from ${folder}.`);
        } else {
            console.error(`File ${file} not found in ${folder}.`);
        }
    }
};

// Boot the WebOS
WebOSKernel.boot();
