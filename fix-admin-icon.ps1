Add-Type -AssemblyName System.Drawing

$srcFile = "D:\02Projects\ag2r\public\ag2r-icon-admin.png"
$outFile1 = "D:\02Projects\ag2r\public\apple-touch-icon-admin.png"

$srcImage = [System.Drawing.Image]::FromFile($srcFile)
$bitmap = New-Object System.Drawing.Bitmap 512, 512
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

$graphics.Clear([System.Drawing.Color]::White)
$graphics.DrawImage($srcImage, 0, 0, 512, 512)

$bitmap.Save($outFile1, [System.Drawing.Imaging.ImageFormat]::Png)

$graphics.Dispose()
$bitmap.Dispose()
$srcImage.Dispose()
