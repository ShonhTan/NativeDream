var sequenceRecord = [];

window.addEventListener('keyup', function (event) {
    if (event.which === 223) {
        var t1 = game.input["A"]
        var t2 = game.input["Z"]
        var t3 = game.input["E"]
        var t4 = game.input["R"]
        var nonote = {
            A: t1,
            Z: t2,
            E: t3,
            R: t4
        }
        var timmm = game.time
        console.log(timmm);

        sequenceRecord.push({
            timing: timmm,
            letter: nonote
        })
    }
});


var sequenceCopy = [{"timing":1590,"letter":{"A":true,"Z":false,"E":false,"R":true}},{"timing":2610,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":3370,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":4250,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":5120,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":5990,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":6810,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":7650,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":8590,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":9410,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":10260,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":10670,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":11020,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":11370,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":12130,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":12600,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":13070,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":13410,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":13900,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":14370,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":14720,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":15340,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":15770,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":16100,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":16570,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":16990,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":17370,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":17910,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":18420,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":18800,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":20080,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":20590,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":20970,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":21300,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":21740,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":22200,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":22550,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":22900,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":23210,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":23530,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":24880,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":25200,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":25520,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":25830,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":26170,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":26340,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":26860,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":27190,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":27520,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":27820,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":28510,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":28830,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":29150,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":29810,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":30120,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":30420,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":31180,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":31770,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":32080,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":32400,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":32720,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":33050,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":33380,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":33710,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":34040,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":34710,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":35370,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":35690,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":35990,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":36330,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":36650,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":36840,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":37350,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":37650,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":37980,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":38270,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":38940,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":39220,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":39560,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":40240,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":40570,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":40840,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":41570,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":42230,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":42530,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":42860,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":43160,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":43510,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":43820,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":43990,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":44350,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":44860,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":45150,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":45290,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":45650,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":46190,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":46450,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":46620,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":46900,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":47060,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":47420,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":48080,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":48380,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":48710,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":49410,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":50040,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":50410,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":50760,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":51330,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":51970,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":52590,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":52920,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":53220,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":53560,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":53920,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":54250,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":54610,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":54940,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":55280,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":55570,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":55740,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":55920,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":56640,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":56900,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":57220,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":57540,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":57870,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":58170,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":58340,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":58530,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":58930,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":59220,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":59870,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":60180,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":60520,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":61160,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":61470,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":61800,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":62650,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":63280,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":63530,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":63840,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":64110,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":64530,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":64790,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":65090,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":65390,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":65730,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":66070,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":66250,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":66430,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":67150,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":67410,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":67740,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":68050,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":68310,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":68480,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":68740,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":69070,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":69370,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":69750,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":70380,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":70650,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":71020,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":71670,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":71930,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":72260,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":73050,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":73610,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":73920,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":74240,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":74570,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":74970,"letter":{"A":false,"Z":false,"E":true,"R":false}},{"timing":75370,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":75860,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":76360,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":77530,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":77870,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":78170,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":78480,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":78850,"letter":{"A":false,"Z":true,"E":true,"R":true}},{"timing":79170,"letter":{"A":false,"Z":true,"E":true,"R":true}},{"timing":79470,"letter":{"A":false,"Z":true,"E":true,"R":true}},{"timing":79800,"letter":{"A":false,"Z":true,"E":true,"R":true}},{"timing":80090,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":80450,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":80730,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":81090,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":81470,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":81810,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":82140,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":82470,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":82820,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":83140,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":83450,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":83770,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":84170,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":84490,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":84770,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":85080,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":85430,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":85740,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":86040,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":86320,"letter":{"A":false,"Z":false,"E":false,"R":true}},{"timing":86650,"letter":{"A":false,"Z":true,"E":false,"R":true}},{"timing":86970,"letter":{"A":false,"Z":true,"E":false,"R":true}},{"timing":87260,"letter":{"A":false,"Z":true,"E":false,"R":true}},{"timing":87610,"letter":{"A":false,"Z":true,"E":false,"R":true}},{"timing":88070,"letter":{"A":true,"Z":false,"E":false,"R":false}},{"timing":88430,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":88760,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":89050,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":89410,"letter":{"A":false,"Z":true,"E":false,"R":true}},{"timing":89710,"letter":{"A":false,"Z":true,"E":false,"R":true}},{"timing":90020,"letter":{"A":false,"Z":true,"E":false,"R":true}},{"timing":90340,"letter":{"A":false,"Z":true,"E":false,"R":true}},{"timing":90670,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":90970,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":91290,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":91620,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":92000,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":92300,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":92580,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":92910,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":93310,"letter":{"A":true,"Z":false,"E":false,"R":true}},{"timing":93580,"letter":{"A":true,"Z":false,"E":false,"R":true}},{"timing":93910,"letter":{"A":true,"Z":false,"E":false,"R":true}},{"timing":94220,"letter":{"A":true,"Z":false,"E":false,"R":true}},{"timing":94670,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":94940,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":95250,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":95540,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":95890,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":96220,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":96490,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":96850,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":97260,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":97550,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":97840,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":98160,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":98500,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":98670,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":98840,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":99010,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":99350,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":99510,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":99680,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":99850,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":100020,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":100350,"letter":{"A":true,"Z":true,"E":true,"R":false}},{"timing":100520,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":100720,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":100900,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":101080,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":101260,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":101440,"letter":{"A":false,"Z":true,"E":false,"R":false}},{"timing":101630,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":101890,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":102070,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":102240,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":102410,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":102590,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":102920,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":103110,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":103280,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":103450,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":103620,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":103790,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":103970,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":104140,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":104310,"letter":{"A":false,"Z":false,"E":true,"R":true}},{"timing":104630,"letter":{"A":true,"Z":false,"E":false,"R":true}},{"timing":104810,"letter":{"A":true,"Z":false,"E":false,"R":true}},{"timing":104970,"letter":{"A":true,"Z":false,"E":false,"R":true}},{"timing":105130,"letter":{"A":true,"Z":false,"E":false,"R":true}},{"timing":105300,"letter":{"A":true,"Z":false,"E":false,"R":true}},{"timing":105610,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":105780,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":105940,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":106090,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":106260,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":106440,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":106620,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":106800,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":106970,"letter":{"A":false,"Z":true,"E":true,"R":false}},{"timing":107280,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":107460,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":107610,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":107800,"letter":{"A":true,"Z":true,"E":false,"R":false}},{"timing":108190,"letter":{"A":false,"Z":true,"E":true,"R":true}},{"timing":108370,"letter":{"A":false,"Z":true,"E":true,"R":true}},{"timing":108540,"letter":{"A":false,"Z":true,"E":true,"R":true}},{"timing":108710,"letter":{"A":false,"Z":true,"E":true,"R":true}},{"timing":108890,"letter":{"A":false,"Z":true,"E":true,"R":true}}]