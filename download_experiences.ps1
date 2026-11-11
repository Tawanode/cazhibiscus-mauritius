$images = @{
  "hero-experiences.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuDSpeNwNS-aw8m69E3qLDeYx51Bpn_G093-u9nK0lXv-Duo-sLVGuUfo9o2JHQs-ujiZX8ttuxVQCYaIKbTne05YTFKnbFZ-Xurph1GSOHyuHxd3PSkgSxznoqDCpffy0fZ0zDKO1VFcC7d-KJ-osHKO6kfeosXumfOIgu-hP5oAwa2pPtfxOhYQXIB1Md14-j0838z7tE5x9sKFPn_UeKOS4WjKFBEny0kLYbvRF0WMeRZ6tRqZhgD"
  "snorkeling.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuBzfLhv-qPKEiwRnij_7YnYM5CFnyJhxVshWCQj3Wx759bm4f2qdlfIih11OFel07SUP4TSvAApAPWdtCXbA_d8X7ZMKFAu8nA7ZNr9IYfu4pyyt_BJmsdQcG116dM1TxSKIuIlf3SXHvOrVar1QQ2R7LoLwa_IWSnun_LHlZWjs37vB-22Iiwp-Kou4iDCkBEZYIz6AxMtJSUU_BI5oEHvNFDEuHbFrKKriWly40i663GdNMbURk0Y"
  "scuba-diving.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuCslivXOtH_0Hs3qjYzvsVd8uB_qM5-9ke6Mr30iVmmwvoqtiiEiDKne_mSl1SBl9QYeNB0DOigTCp09h5N7ozTHR9TucdQc4ocXJfVZhcbN8lIZC7umTp2NOUWnhay3cFBFrGE7gmBdu-scAfnF_KG8xYMInSjNwBMsOIAs7fh3E883uZ-enFligwZ5Li-QRmSdDsVGv2TYonTjQJGkG3-LYYcAz0R6naxF6N-_JarpWFkZUXGDL4v"
  "island-tours.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuC3FCSJMPl1Jf6vh0j0Llb1C81hVgEWvMiboocPH4bR8SXQF-56r99QtRy8XozOyh-Yb8s0i16jtyHu3OKPf-GeY0qr9TuhUjO93tCJda9biA8V639g19rDajwB0vjgxhTkqOP-LC0VC9Hzcb-sewY4RHvtNqfGvjEhjtt_mZRIkbQC6rhWTRrLioSNxG8o_CcTajCtTpcwpTIWXeaE31Y4Hz7Qt_xCEam87AgJ4-wAjghRXr5NkGjm"
  "catamaran-cruise.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuBQpcUTGmoC53mUCXuyCnpeEwD-wzXT9T4SF2Ydg_GCD9xNbZmZcGKYoOb3LTjjxUu7xj4H60BR05gZ06jC5QlhCwx9sEevogvT9vz8iy5zImauaJ0y75Se1WUUDUApRymOZutI_EfSR2DBLEC0M4nKxxiKoYfDBp_v8ozQM74Nk6fLgwGlJjZCLOSU-PB1sIoVf7ISlq1PPZSR8ahtZXFl-ZJm65l2r7CQitwmohOfiQCcIe3cgYRo"
  "golf.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuBr9GC-2gkYwZgofb0kCXsFAgPTpUe7aK6MrWWaFEi4EvvrjKXBGnTB9ME-eHADaRqJBnuasYSKXl6C_TbnvLmYHFiN2da97RqmI0U-f_U1gcDFZuGB73tAd1zrYngSf3bG-kwNVo68LlQ2Q61JVCyFRonnXkpeOhE2qh1dUOEZB-y6Vll2UJru7LLrAsJl3_RnW3uxJJ6dFrDbxdJpqL58TgKZNRi8SFvF5oHs4_4OFDaURWz-Or9O"
  "sunset-walks.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuDn_l93Hm7-jsivy9_0pEN6-8s03QjJIy5cpHxagXNqNrOjgd7pSnhY36htiy3vZ-Eig9hHB66tw68BbyWHhEQ-IkugvjdHXO4gfvw4hUYB9pcnrUoGyCncOTi5YbICa62CDlkiH33s-7NtD7oYMME_ViU2Bw_sFiLeOVwhgDlc5fUWSqaaFMtx_b3HwzDzEgxnSfEw_fvZ59FIu-yREXRttxiToANr-1L89PsrumZlah6i9TBlIbkO"
  "gastronomy.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuDtYAxoZ1GDKDcRMUYjBs_gn3xhGJYCiusgsCFNnHfwpOKTBbydYHjL53a1C-7VZwDM4AIHrmtUH2vVo423GSz9bJXcCC9KWV-L6ojSgKbrfrmt8FP_7ql775-H8u4w4JDEZ_frojFOu6HC-ekWQeFRbRzcYRug0hEhiLJm7nSkDyOkEyG5-Ipc3B-QMDKBDWoUkZZjQWGJ9_9KB55YWHqxHMQYsOp7jNcQDCXBk-OtCgxTqm5fjH0d"
}

New-Item -ItemType Directory -Force -Path "d:\cazhibiscus-mauritius\website\public\images\experiences"

foreach ($key in $images.Keys) {
  $url = $images[$key]
  $dest = "d:\cazhibiscus-mauritius\website\public\images\experiences\$key"
  Invoke-WebRequest -Uri $url -OutFile $dest
  Write-Host "Downloaded $key"
}
