const datasEnunciado = [
    "Mon Jul 30 1973 20:50:12 GMT+0100 (Central European Standard Time)",
    "Wed Jun 30 1999 19:30:52 GMT+0200 (Central European Summer Time)",
    "Mon May 17 1993 12:51:27 GMT+0200 (Central European Summer Time)",
    "Mon May 17 1982 03:38:40 GMT+0200 (Central European Summer Time)",
    "Fri Sep 18 1981 05:34:25 GMT+0200 (Central European Summer Time)",
    "Mon Sep 07 1998 03:35:57 GMT+0200 (Central European Summer Time)",
    "Sun Jun 21 1998 21:11:00 GMT+0200 (Central European Summer Time)",
    "Mon Apr 13 1970 17:39:09 GMT+0100 (Central European Standard Time)",
    "Tue Apr 02 1991 16:41:52 GMT+0200 (Central European Summer Time)",
    "Wed Aug 18 1976 06:01:08 GMT+0100 (Central European Standard Time)",
    "Thu Nov 02 1972 06:11:41 GMT+0100 (Central European Standard Time)",
    "Mon Sep 13 1982 05:29:28 GMT+0200 (Central European Summer Time)",
    "Mon Sep 20 1993 09:20:23 GMT+0200 (Central European Summer Time)",
    "Fri Sep 12 1980 18:48:51 GMT+0200 (Central European Summer Time)",
    "Tue Jul 02 1996 04:32:52 GMT+0200 (Central European Summer Time)",
    "Mon Jul 08 1996 07:26:35 GMT+0200 (Central European Summer Time)",
    "Tue May 19 1987 02:41:41 GMT+0200 (Central European Summer Time)",
    "Tue Feb 22 1994 00:02:46 GMT+0100 (Central European Standard Time)",
    "Thu May 13 1971 14:38:01 GMT+0100 (Central European Standard Time)",
];

function dataMaisAntiga(array) {
    let myDatas = array
        .map((el) => new Date(el).valueOf())
        .sort((a, b) => a - b)[0];
    return new Date(myDatas);
}

console.log(dataMaisAntiga(datasEnunciado));
