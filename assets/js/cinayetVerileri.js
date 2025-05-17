const cinayetVerileri = {
    veriler: [
        {
            tarih: "2024-01-15",
            isim: "A.A.",
            yas: 28,
            il: "İstanbul",
            fail: "Eski eşi",
            failIliski: "Eski Eş",
            olumNedeni: "Silahla vurulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2024-01-10",
            isim: "B.B.",
            yas: 35,
            il: "Ankara",
            fail: "Eşi",
            failIliski: "Eş",
            olumNedeni: "Bıçaklanma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2024-01-05",
            isim: "C.C.",
            yas: 42,
            il: "İzmir",
            fail: "Tanıdık",
            failIliski: "Tanıdık",
            olumNedeni: "Boğulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-12-28",
            isim: "D.D.",
            yas: 24,
            il: "Antalya",
            fail: "Babası",
            failIliski: "Baba",
            olumNedeni: "Silahla vurulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-12-20",
            isim: "E.E.",
            yas: 31,
            il: "Bursa",
            fail: "Eski eşi",
            failIliski: "Eski Eş",
            olumNedeni: "Bıçaklanma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-12-15",
            isim: "F.F.",
            yas: 19,
            il: "Adana",
            fail: "Kardeşi",
            failIliski: "Kardeş",
            olumNedeni: "Boğulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-12-10",
            isim: "G.G.",
            yas: 27,
            il: "Konya",
            fail: "Eşi",
            failIliski: "Eş",
            olumNedeni: "Silahla vurulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-12-05",
            isim: "H.H.",
            yas: 33,
            il: "Gaziantep",
            fail: "Tanıdık",
            failIliski: "Tanıdık",
            olumNedeni: "Bıçaklanma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-11-28",
            isim: "I.I.",
            yas: 45,
            il: "Mersin",
            fail: "Eşi",
            failIliski: "Eş",
            olumNedeni: "Boğulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-11-20",
            isim: "J.J.",
            yas: 22,
            il: "Diyarbakır",
            fail: "Eski eşi",
            failIliski: "Eski Eş",
            olumNedeni: "Silahla vurulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-11-15",
            isim: "K.K.",
            yas: 29,
            il: "İstanbul",
            fail: "Eşi",
            failIliski: "Eş",
            olumNedeni: "Bıçaklanma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-11-10",
            isim: "L.L.",
            yas: 36,
            il: "Ankara",
            fail: "Tanıdık",
            failIliski: "Tanıdık",
            olumNedeni: "Boğulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-11-05",
            isim: "M.M.",
            yas: 41,
            il: "İzmir",
            fail: "Babası",
            failIliski: "Baba",
            olumNedeni: "Silahla vurulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-10-28",
            isim: "N.N.",
            yas: 25,
            il: "Antalya",
            fail: "Eski eşi",
            failIliski: "Eski Eş",
            olumNedeni: "Bıçaklanma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-10-20",
            isim: "O.O.",
            yas: 32,
            il: "Bursa",
            fail: "Kardeşi",
            failIliski: "Kardeş",
            olumNedeni: "Boğulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-10-15",
            isim: "P.P.",
            yas: 38,
            il: "Samsun",
            fail: "Tanıdık",
            failIliski: "Tanıdık",
            olumNedeni: "Bıçaklanma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-10-10",
            isim: "R.R.",
            yas: 44,
            il: "Kayseri",
            fail: "Eşi",
            failIliski: "Eş",
            olumNedeni: "Silahla vurulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-10-05",
            isim: "S.S.",
            yas: 29,
            il: "Balıkesir",
            fail: "Babası",
            failIliski: "Baba",
            olumNedeni: "Boğulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-09-28",
            isim: "T.T.",
            yas: 26,
            il: "Şanlıurfa",
            fail: "Eski eşi",
            failIliski: "Eski Eş",
            olumNedeni: "Bıçaklanma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-09-20",
            isim: "U.U.",
            yas: 31,
            il: "Tekirdağ",
            fail: "Kardeşi",
            failIliski: "Kardeş",
            olumNedeni: "Boğulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-09-15",
            isim: "V.V.",
            yas: 22,
            il: "Hatay",
            fail: "Eşi",
            failIliski: "Eş",
            olumNedeni: "Silahla vurulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-09-10",
            isim: "Y.Y.",
            yas: 35,
            il: "Manisa",
            fail: "Tanıdık",
            failIliski: "Tanıdık",
            olumNedeni: "Bıçaklanma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-09-05",
            isim: "Z.Z.",
            yas: 41,
            il: "Aydın",
            fail: "Babası",
            failIliski: "Baba",
            olumNedeni: "Silahla vurulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-08-28",
            isim: "AA.AA.",
            yas: 25,
            il: "Trabzon",
            fail: "Eski eşi",
            failIliski: "Eski Eş",
            olumNedeni: "Bıçaklanma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-08-20",
            isim: "BB.BB.",
            yas: 32,
            il: "Sakarya",
            fail: "Kardeşi",
            failIliski: "Kardeş",
            olumNedeni: "Boğulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-08-15",
            isim: "CC.CC.",
            yas: 29,
            il: "Kocaeli",
            fail: "Eşi",
            failIliski: "Eş",
            olumNedeni: "Bıçaklanma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-08-10",
            isim: "DD.DD.",
            yas: 36,
            il: "Malatya",
            fail: "Tanıdık",
            failIliski: "Tanıdık",
            olumNedeni: "Boğulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-08-05",
            isim: "EE.EE.",
            yas: 41,
            il: "Van",
            fail: "Babası",
            failIliski: "Baba",
            olumNedeni: "Silahla vurulma",
            kaynak: "https://kadincinayetleri.org"
        },
        {
            tarih: "2023-07-28",
            isim: "FF.FF.",
            yas: 25,
            il: "Erzurum",
            fail: "Eski eşi",
            failIliski: "Eski Eş",
            olumNedeni: "Bıçaklanma",
            kaynak: "https://kadincinayetleri.org"
        }
    ],
    
    istatistikler: {
        yillikVeriler: {
            "2021": 409,
            "2022": 381,
            "2023": 334,
            "2024": 15
        },
        failVeriler: [
            { name: "Eş/Eski Eş", value: 235 },
            { name: "Tanıdık", value: 98 },
            { name: "Baba/Kardeş", value: 45 },
            { name: "Diğer", value: 56 }
        ],
        yasVeriler: [89, 156, 98, 45, 32],
        ilVeriler: [
            { name: "İstanbul", value: 98 },
            { name: "Ankara", value: 45 },
            { name: "İzmir", value: 38 },
            { name: "Antalya", value: 32 },
            { name: "Bursa", value: 28 },
            { name: "Adana", value: 25 },
            { name: "Konya", value: 22 },
            { name: "Gaziantep", value: 20 },
            { name: "Mersin", value: 18 },
            { name: "Diyarbakır", value: 15 },
            { name: "Samsun", value: 14 },
            { name: "Kayseri", value: 13 },
            { name: "Balıkesir", value: 12 },
            { name: "Şanlıurfa", value: 11 },
            { name: "Tekirdağ", value: 10 },
            { name: "Hatay", value: 9 },
            { name: "Manisa", value: 8 },
            { name: "Aydın", value: 7 },
            { name: "Trabzon", value: 6 },
            { name: "Sakarya", value: 5 },
            { name: "Kocaeli", value: 4 },
            { name: "Malatya", value: 3 },
            { name: "Van", value: 2 },
            { name: "Erzurum", value: 1 }
        ]
    }
}; 