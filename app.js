
var iccMensWc = {
    matches:{
        date: "2 Jun",
        groupStage: "Group Stage T20 1 of 55",
        teamOne: {
            name: "Canada",
            flag: "https://ssl.gstatic.com/onebox/media/sports/logos/H23oIEP6qK-zNc3O8abnIA_48x48.png",
            score: 194+"/"+5,
            overs: "(20)",
        },
        teamTwo: {
            name: "United States",
            flag: "https://ssl.gstatic.com/onebox/media/sports/logos/wj9uZvn_vZrelLFGH8fnPA_48x48.png",
            score: 197+"/"+3,
            overs: "(17.4)",
        },
    },
    result: "Usa Won By 7 Wickets (14 balls +<br>+ left )",
    finalImg: "https://ssl.gstatic.com/onebox/media/sports/videos/vita/I-K05_nXKMSG6lbg_192x108.jpg"
}


document.getElementById("group1").innerHTML = iccMensWc.matches.groupStage;
