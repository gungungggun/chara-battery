var sharp = require('sharp')
var fs = require('fs')

// --------------- Android ------------------------

sharp('res/icon1024x1024.png')
  .resize(36, 36)
  .toFile('app/platforms/android/res/mipmap-ldpi/icon.png')

sharp('res/icon1024x1024.png')
  .resize(48, 48)
  .toFile('app/platforms/android/res/mipmap-mdpi/icon.png')

sharp('res/icon1024x1024.png')
  .resize(72, 72)
  .toFile('app/platforms/android/res/mipmap-hdpi/icon.png')

sharp('res/icon1024x1024.png')
  .resize(96, 96)
  .toFile('app/platforms/android/res/mipmap-xhdpi/icon.png')

sharp('res/icon1024x1024.png')
  .resize(144, 144)
  .toFile('app/platforms/android/res/mipmap-xxhdpi/icon.png')

sharp('res/icon1024x1024.png')
  .resize(192, 192)
  .toFile('app/platforms/android/res/mipmap-xxxhdpi/icon.png')

fs.createReadStream('res/screen/android/splash.png').pipe(fs.createWriteStream('app/res/screen/android/splash.png'))
