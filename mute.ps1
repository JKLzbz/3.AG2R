$code = @"
using System.Runtime.InteropServices;
public class Audio {
    [DllImport("user32.dll")]
    public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, int dwExtraInfo);
}
"@
Add-Type -TypeDefinition $code
[Audio]::keybd_event(173, 0, 0, 0)
