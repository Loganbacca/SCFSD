﻿(function (SCFSD) {
    SCFSD.Static = SCFSD.Static || {};
    SCFSD.Static.loadShips = function () {
        var shipArray = [];
        shipArray.push(new SCFSD.Ship("Aurora", true));
        shipArray.push(new SCFSD.Ship("Mustang", true));
        shipArray.push(new SCFSD.Ship("Reliant", true));
        shipArray.push(new SCFSD.Ship("Avenger", true));
        shipArray.push(new SCFSD.Ship("Gladius", true));
        shipArray.push(new SCFSD.Ship("Argo", true));
        shipArray.push(new SCFSD.Ship("Merlin", true));
        shipArray.push(new SCFSD.Ship("Archimedes", true));
        shipArray.push(new SCFSD.Ship("85X", true));
        shipArray.push(new SCFSD.Ship("M50", true));
        shipArray.push(new SCFSD.Ship("Razor", true));
        shipArray.push(new SCFSD.Ship("300 Series", true, "s300i"));
        shipArray.push(new SCFSD.Ship("Nox", false));
        shipArray.push(new SCFSD.Ship("Dragonfly", false));
        shipArray.push(new SCFSD.Ship("X1", false));
        shipArray.push(new SCFSD.Ship("Herald", true));
        shipArray.push(new SCFSD.Ship("Buccaneer", true));
        shipArray.push(new SCFSD.Ship("Hornet", true));
        shipArray.push(new SCFSD.Ship("Gladiator", true));
        shipArray.push(new SCFSD.Ship("Eclipse", true));
        shipArray.push(new SCFSD.Ship("Hurricane", true));
        shipArray.push(new SCFSD.Ship("Sabre", true));
        shipArray.push(new SCFSD.Ship("Vanguard", true));
        shipArray.push(new SCFSD.Ship("Khartu", true));
        shipArray.push(new SCFSD.Ship("Blade", true));
        shipArray.push(new SCFSD.Ship("Scythe", true));
        shipArray.push(new SCFSD.Ship("Glaive", true));
        shipArray.push(new SCFSD.Ship("Defender", true));
        shipArray.push(new SCFSD.Ship("Prowler", true));
        shipArray.push(new SCFSD.Ship("Redeemer", true));
        shipArray.push(new SCFSD.Ship("Terrapin", true));
        shipArray.push(new SCFSD.Ship("Prospector", true));
        shipArray.push(new SCFSD.Ship("Freelancer", true));
        shipArray.push(new SCFSD.Ship("Cutlass", true));
        shipArray.push(new SCFSD.Ship("Constellation", true));
        shipArray.push(new SCFSD.Ship("600i", true));
        shipArray.push(new SCFSD.Ship("Retaliator", true));
        shipArray.push(new SCFSD.Ship("Caterpillar", true));
        shipArray.push(new SCFSD.Ship("Hull A", true, "Hull-A"));
        shipArray.push(new SCFSD.Ship("Hull B", true, "Hull-B"));
        shipArray.push(new SCFSD.Ship("Hull C", true, "Hull-C"));
        shipArray.push(new SCFSD.Ship("Hull D", true, "Hull-D"));
        shipArray.push(new SCFSD.Ship("Hull E", true, "Hull-E"));
        shipArray.push(new SCFSD.Ship("Crucible", true));
        shipArray.push(new SCFSD.Ship("Starfarer", true));
        shipArray.push(new SCFSD.Ship("Genesis", true));
        shipArray.push(new SCFSD.Ship("890 Jump", true, "Jump"));
        shipArray.push(new SCFSD.Ship("Merchantman", true));
        shipArray.push(new SCFSD.Ship("Carrack", true));
        shipArray.push(new SCFSD.Ship("Pioneer", true));
        shipArray.push(new SCFSD.Ship("Endeavor", true));
        shipArray.push(new SCFSD.Ship("Reclaimer", true));
        shipArray.push(new SCFSD.Ship("Orion", true));
        shipArray.push(new SCFSD.Ship("Polaris", true));
        shipArray.push(new SCFSD.Ship("Idris", true));
        shipArray.push(new SCFSD.Ship("Javelin", true));
        return shipArray;
    }
})(SCFSD = SCFSD || {});