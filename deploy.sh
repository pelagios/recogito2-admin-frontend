# A simple helper to copy the contents of the build folder to Recogito.
# Use at your own risk!
npm run build

echo "Removing JS and view templates from previous build"
rm -rf ../recogito2/public/javascripts/admin/static/
rm ../recogito2/app/views/admin/activity.scala.html
rm ../recogito2/app/views/admin/authorities.scala.html
rm ../recogito2/app/views/admin/maintenance.scala.html
rm ../recogito2/app/views/admin/users.scala.html

echo "Copying files from /build folder"
cp -a ./build/static/ ../recogito2/public/javascripts/admin/.
cp ./build/activity.scala.html ../recogito2/app/views/admin/.
cp ./build/authorities.scala.html ../recogito2/app/views/admin/.
cp ./build/maintenance.scala.html ../recogito2/app/views/admin/.
cp ./build/users.scala.html ../recogito2/app/views/admin/.
