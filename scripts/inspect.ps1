$s = New-Object -ComObject Shell.Application
$f = $s.Namespace('c:\cei ice\public\videos')
$it = $f.ParseName('cei-flavour-transformation.mp4')
foreach ($i in 0..320) {
    $k = $f.GetDetailsOf($null, $i)
    $v = $f.GetDetailsOf($it, $i)
    if ($v -and ($k -match 'width|height|dimensions|frame|duration|length')) {
        Write-Host "$k = $v"
    }
}
