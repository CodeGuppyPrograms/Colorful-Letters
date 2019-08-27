// #SKETCHNAME Colorful letters
var pallete = ["Red","OrangeRed", "Tomato", "DarkOrange", "Orange", "Gold", "Yellow", "LightYellow"];

background('Clouds');
music('8 bit intro');

// On a 8x8 grid, draw the characters that you want to write.
// We sugest to write your name... then convert from binary to hex and put the numbers here
// (based on characters from // based on characters from: github.com/dhepper/font8x8/)
var chars = {
    S : [ 0x78, 0xCC, 0xE0, 0x70, 0x1C, 0xCC, 0x78, 0x00 ],
    T : [ 0xFC, 0xB4, 0x30, 0x30, 0x30, 0x30, 0x78, 0x00 ],
    A : [ 0x30, 0x78, 0xCC, 0xCC, 0xFC, 0xCC, 0xCC, 0x00 ],
    R : [ 0xFC, 0x66, 0x66, 0x7C, 0x6C, 0x66, 0xE6, 0x00 ]
}

function loop()
{
    printText("START", 25, 200, 20);
}

function printText(text, x, y, size)
{
    noStroke();
    
    for(var i = 0; i < text.length; i++)
    {
        var chr = text[i];
        
        var xc = x + i * 8 * size;
        printChar(chr, xc, y, size);
    }
    
    if (frameCount % 10 == 0)
        rotatePallete();
}

function printChar(chr, x, y, size)
{
    var bmp = chars[chr];
    
    if (bmp == null)
        return;
    
    for(var row = 0; row < bmp.length; row++)
    {
        var txtNo = numberToBinary(bmp[row], 8);
        
        for(var col = 0; col < txtNo.length; col++)
        {
            var xr = x + col * size;
            var yr = y + row * size;
            
            if (txtNo[col] == "1")
            {
                fill(pallete[row]);
                rect(xr, yr, size, size);
            }
        }
    }
}

function numberToBinary(n, bits)
{
    var txt = n.toString(2);
    
    while(txt.length < bits)
        txt = "0" + txt;
        
    return txt;
}

function rotatePallete()
{
    var color = pallete.shift();
    pallete.push(color);
}

