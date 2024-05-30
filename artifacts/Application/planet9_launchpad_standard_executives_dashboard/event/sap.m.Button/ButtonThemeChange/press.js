 let theme = sap.ui.getCore().getConfiguration().getTheme();
    let result1 = theme.includes("dark");
    var element = document.querySelector('.nepShell');
    var newImageUrl;
    if (result1 === true) {
        sap.ui.getCore().applyTheme("sap_horizon");
        // ButtonThemeChange.setIcon("sap-icon://dark-mode");
        newImageUrl = "https://dxpdemo.neptune-software.cloud/media/root/DXPDemo%20launchpad/DXP%20Background%20demo%2011.png";
        if (element) {
            element.style.backgroundImage = '';
            element.style.cssText += "background-image: url('" + newImageUrl + "') !important; background-repeat: no-repeat !important; background-size: cover !important;";
        }

    } else {
        sap.ui.getCore().applyTheme("sap_horizon_dark");
        // ButtonThemeChange.setIcon("sap-icon://light-mode");
        newImageUrl = "https://dxpdemo.neptune-software.cloud/media/root/DXPDemo%20launchpad/DXP%20Background%20demo%2012.png"
        if (element) {
            element.style.backgroundImage = '';
            element.style.cssText += "background-image: url('" + newImageUrl + "') !important; background-repeat: no-repeat !important; background-size: cover !important;";
        }
    }

    