$images = @{
  "hero-about.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuCMyZk1C91cEUP78dRzKsU2KATXWAVxJEdth-7o5Uxw3aZzi-lAfmHEpDEJQoWk4aVOi_qKIfMlrbV9uChy1EDVExyyj09SU6VfRkqtquLkOEpAQL1a413iDcC3VEs5WhXXGowZYKZNNz7vTQf8egtcdTxD3X7jpSevZq7R6yvR8N5wFr4oW4v8OgQ6pLMtwU49Kv6hgFxUlQJ9QTqHH0hreubSESm9LbQq0182qurAdSPFDKWEGlQR"
  "hosts.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuAt9GSpb70t4pWFuXJtichGcdzAFsuI4KDKU63J_xkbLTYXo78SsCyISXYOyTSW7lFGBAI1PuXPz-e4NHWpaH_dFiCh3PKRKXeHhSYfR-Rp4zJyj6ajy5hbNw3LSxbypPOxYigbpY7oYC_65sFya5FPtooaYmPG9_NAnUoOpxBIYQLac6-YKvguYh54XX5pX4gwbBt4odEfHaycWih--QFmSUmnxq_Z4cgiRNAku2XK2St3ET6Ixpcf"
  "sustainability.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuDa3x02UQRboyGxZclF2f4KydREsCv6Z2nSId-S4BmolKL49TUa_Gszd47da8AloawiGHJhmb15xcVC4gaqG2vR4F3z_uXVpBEjUoOrz1oadg-vOHOuJE0Wc-m4OgT_1NjaVLlv9Bx_dh3tCbxynjVAVXtloByPsrAHtha9HZ1yb0z7zo_z0_ZRwY6YoSiFAWe8qhwcpBvIVRnnGO2YGFx88DzL5CFLqaHZ65J7aFA13IcYb2TAHejk"
  "resort-night.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuBXf_YQBOv2skXIFAcfbEhCIx9ddQqb0vx1TH_BasYvvEGaKtvr_qFaepAH7CW73AfPCo16DaA9hL5HWPYerqL8L41cUbrKiZUd1nNLV6LAAb8gFNGOukJiHgS8KwFtWNw4-6cVzwO3Hp3nVrhbMIiavvVQRger98MBRzlbmTzxJ7GL2RHV3JzT0AdUC0xChEiJWMHpcGNwRVimsAdIpcF1QR0ZFYRf8maO3OUS8I1lC6ZykinGqyvp"
}

New-Item -ItemType Directory -Force -Path "d:\cazhibiscus-mauritius\website\public\images\about"

foreach ($key in $images.Keys) {
  $url = $images[$key]
  $dest = "d:\cazhibiscus-mauritius\website\public\images\about\$key"
  Invoke-WebRequest -Uri $url -OutFile $dest
  Write-Host "Downloaded $key"
}
