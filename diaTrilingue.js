/* function trilingue(lingua, n) {
    const mapa = new Map([
        [
            "eng",
            new Map([
                [0, "zero"],
                [1, "one"],
                [2, "two"],
                [3, "three"],
                [4, "four"],
                [5, "five"],
                [6, "six"],
                [7, "seven"],
                [8, "eight"],
                [9, "nine"],
                [10, "ten"],
            ]),
            [
                "pt",
                new Map([
                    [0, "zero"],
                    [1, "um"],
                    [2, "dois"],
                    [3, "três"],
                    [4, "quatro"],
                    [5, "cinco"],
                    [6, "seis"],
                    [7, "sete"],
                    [8, "oito"],
                    [9, "nove"],
                    [10, "dez"],
                ]),
            ],
            [
                "fr",
                new Map([
                    [0, "zéro"],
                    [1, "un"],
                    [2, "deux"],
                    [3, "trois"],
                    [4, "quatre"],
                    [5, "cinq"],
                    [6, "six"],
                    [7, "sept"],
                    [8, "huit"],
                    [9, "neuf"],
                    [10, "dix"],
                ]),
            ],
        ],
    ]);

    return mapa.get(lingua).get(n);
}

console.log(trilingue("eng", 3)); */

function numeroTrinlingue(n, lang) {
    const langs = [
        { eng: "zero", pt: "zero", fr: "zéro" },
        { eng: "one", pt: "um", fr: "un" },
        { eng: "two", pt: "dois", fr: "deux" },
        { eng: "three", pt: "três", fr: "trois" },
        { eng: "four", pt: "quatro", fr: "quatre" },
        { eng: "five", pt: "cinco", fr: "cinc" },
        { eng: "six", pt: "seis", fr: "six" },
        { eng: "seven", pt: "sete", fr: "sept" },
        { eng: "eight", pt: "oito", fr: "huit" },
        { eng: "nine", pt: "nove", fr: "neuf" },
        { eng: "ten", pt: "dez", fr: "dix" },
    ];

    return mapa[n][lang];
}

console.log(numeroTrinlingue(0, 'eng'))