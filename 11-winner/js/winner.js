const names = [
"Sashin Sahasra Sirichandra (Sashin)",
"Malavi kankanamge subhash chamara udayanga",
"Kalukapuge Pasindhu Dananjaya Bandaranayake (Singhe)",
"Senarath Yapage Don Sagara Praeep (Sagara)",
"Madduma Dahanayakalage Chathurdika Dayarathna ",
"Keshan Madhusanka Dahanayake",
"Gamlath Mudiyanselage Ambanpola Nekath Gedara Nipuna Madhuwantha Bandara Jayathilaka (Soiya)",
"Rathninde Walawwe Danushka Kasun Bandara (Danushka)",
"Neththikumaralage Lashithendra Parakrama Bandara (Meema)",
"W.L. Charith Lahiru",
"Bhathiya Pathma Wimalasinghe (Bhatiya)",
"A.P.G.P.H. Weerasingha",
"Amarasinge Thilina Ranga Prasad (Thatte)",
"Walimuni Dewage Nuwan Wimaladharma",
"Vishwa Dinath Dadallage (20)",
"W.M SSACHINDU SRILAL (Lal)",
"G. K. Anupama Karunarathne (Anu)",
"Pitiduwa Gamage Rashmitha Piyushan (John)",
"Priman Greshli",
"Gayantha Rukshan Kuruppuarachchi (Gayya)",
"Rajapakshage Suhad Vindula Rajapaksha",
"MAHAGAMA GEDARA NIMANTHIKA SUBODANI GAMAGE ABEYRATHNA (Kottambi)",
"Wijekoon Arachchillage Bharatha Palinda Jayarathna",
"Weerakoon Mudiyalselage Thusitha Nuwan Bandara (Thusitha)",
"Gee Kiyanage Vipula Neranjana Ariyarathna", 
"Katukurunda Kaluarachchige Janitha Madubashana", 
"ADIKARAM JAYASOORIYALAGE SWARNA DEVAPRIYA BANDARA (Pemara)",
"Mithila Rasanjith Wickramathunge (Methyl)", 
"Pannala Appuhamilage Gayashan Dananjaya Balasuriya",
"Wijesinghe Arachchige Madhawa Akalanka (Vaari)",
"Pathiranage Kasun Chathuranga", 
"Thilanka Geshan Wickramasinghe (Bakana)", 
"Tharuka Devinda Waththegedara",
"Ganehiachchi Kankanamalage Shanaka Kushan Weerarathne",
"Wijesooriya Mudiyanselage Sameera Madushanka Wijesooriya (Saam)",
"Sajith Abeygunawardana (Pilu)",
"Jayawardhana Abeysinghe Pathiranage Prabath Sanjeewa Lakmal (Kotee)",
"Jayasinghe Arachchige Buddhika Sampath (Buuthaya)",
"Hewa Dajage Nishan Akalanka (Daba)",
"Rasindu Hansika (Patta)",
"Loku Gamage Dinindu Prabhashwara Lokugamage (Lokka)", 
"Anaththa Pathiranage Amila Chinthaka Pathirana (Martin)",
"Liyanarathne Herasinghe Danushka Priyanath (Banda)", 
"Withanapathirannahalage Vidura Vimanshaka Withanapathirana (Vidura)",
"Warnakula Sooriyage Rasika Pathum Sameera Wijerathna",
"Ranasinghe Arachchilage Janith Sandaruwan", 
"Udatiya Walage Dasun Prabodha Amarasinghe", 
"Chethini Kavindya Kobewatta", 
"Dissanayaka Wanigasooriya Mudiyanselage Rajitha Nayanajith", 
"Hawpe Gamage Yasiru Hirantha Karunasena (Pingala)", 
"Rathnayaka Mudiyanselage Isuru Sajith Rathnayaka (Pata)",
"Witharanage Kekulu Sandaruwan (Muga)",
"Gayan Dhanushka Tennakoon (Tkoon)",
"Wel Henage Tharuka Dilshan Kumarathunga",
"Vidana Gamage Buddhi Sankalpa (Manne)", 
"Dasun Tharaka Weerasingha Kulathunga (Ramba)", 
"GODAKAWELA KANKANAMALAGE DILAN UDAYANTHA ASIRI (Dosi)",
"Rajitha Prasad Kumara Jayarathne (Bella)", 
"Pathiranage Thilina Dilshan (PT)"
    ];

    let i = 0;
    let tmrId = -1;
    const btnPick = document.getElementById('btn-pick');
    const lblWinner = document.getElementById('lbl-winner');
    btnPick.addEventListener('click', ()=> {
        if (names.length == 0) {
            lblWinner.innerText = "No one";
            return;
        }
        const btnName = btnPick.innerText;
        btnPick.innerText = btnName == 'Start' ? 'Pick' : 'Start';
        if (btnPick.innerText == 'Pick'){
            tmrId = setInterval(()=> {
                lblWinner.innerText = names[Math.floor(Math.random() * names.length)];
            }, 50);
        }else {
            clearInterval(tmrId);
            const index = names.indexOf(lblWinner.innerText);
            names.splice(index, 1);
        }
    });