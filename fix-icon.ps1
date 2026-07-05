Add-Type -AssemblyName System.Drawing

$srcFile = "D:\02Projects\ag2r\public\antigravity-logo-new.png"
$outFile1 = "D:\02Projects\ag2r\public\ag2r-icon.png"
$outFile2 = "D:\02Projects\ag2r\public\apple-touch-icon.png"

$srcImage = [System.Drawing.Image]::FromFile($srcFile)
$bitmap = New-Object System.Drawing.Bitmap 512, 512
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

# Fill white background
$graphics.Clear([System.Drawing.Color]::White)

# Draw image filling the canvas
$graphics.DrawImage($srcImage, 0, 0, 512, 512)

$bitmap.Save($outFile1, [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Save($outFile2, [System.Drawing.Imaging.ImageFormat]::Png)

$graphics.Dispose()
$bitmap.Dispose()
$srcImage.Dispose()
