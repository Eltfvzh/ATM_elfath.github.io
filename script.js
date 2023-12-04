let saldo = 1000000
let output = ""
let opening = alert("Selamat datang di ATM BBC")
let tanya = confirm("Apakah anda ingin mengambil uang anda?")

while (tanya == true) {
    let password = parseInt(prompt("Masukan PIN anda (PIN = 12345678)"))
    if (password == 12345678) {
        let pengambilan = confirm(`saldo anda : Rp.${saldo}`)
        while (pengambilan == true) {
            if (pengambilan == true) {
                let tanya1 = parseInt(prompt("Minimal pengambilan : Rp 10000"))
                let tanya2 = confirm("Anda Yakin?")
                if (tanya2 == true) {
                    if (tanya1 <= saldo && tanya1 >= 10000) {
                        output = `${saldo}` - `${tanya1}`;
                        document.write("TRANSAKSI BERHASIL" + "<br>" + "====================" + "<br>" + `Ambil : Rp.${tanya1}` + "<br>" + `Sisa Saldo : Rp.${output}`)
                        pengambilan = false
                        tanya = false
                    } else if (tanya1 < 10000) {
                        alert("Minimalnya 10000 bro!")
                        let tanya3 = confirm("Ulang?")
                        if (tanya3 == true) {
                            pengambilan = true
                        } else {
                            pengambilan = false
                            tanya = false
                        }

                    } else if (tanya1 > 1000000) {
                        alert("Saldo kurang!")
                        let tanya4 = confirm("Ulang?")
                        if (tanya4 == true) {
                            pengambilan = true
                        } else {
                            pengambilan = false
                            tanya = false
                        }
                    }else{
                        let tanya5 = confirm("Ngk mau ngambil uang?")
                        if(tanya5 == true){
                            pengambilan = false
                            tanya = false
                        }else{
                            pengambilan = true
                        }
                    }
                } else {
                    tanya = true
                }
            } else {
                tanya = true
            }
        }
    } else {
        alert("Baca dong kan itu ada password nya!.")
        let tanya5 = confirm("Apakah anda ingin mengulanginya lagi?")
        if (tanya5 == true) {
            tanya = true
        } else {
            tanya = false
        }
    }
}