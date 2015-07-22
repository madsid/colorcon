# commits-log
##### Used for tracking changes using cool names for commits.

# pre-goku
 - saving the repo before editing css and optimizing logo and leaves
 - added this changelog file

# goku
 - renamed CHANGELOG to README for easy view
 - added modernizer
 - fixed logo.svg [85Kb -> 6Kb]
 - fixed position of logo
 - fixed leaf images [88Kb -> 5.79Kb]
 - fixed responsive positioning of leaves and added border radius to ".color-box"
 - made nav text uppercase
 - fixed ".box" height adjustment.

# pre-gohan
 - fixed favicon link
 - added color changer to ".launch" background image
  - transition works only in chrome
  - need to find better method to preload images

# kid-gohan
![kid-gohan](http://vignette1.wikia.nocookie.net/dragonball/images/8/85/GohanDebutNV.png/revision/latest/scale-to-width-down/180?cb=20100502143646)
  - modified testimonial slider
   - made "testimonials-desc" a class instead of id to apply to multiple elements
  - modified launch slider
  - modified grunt task to ignore color-backgrounds
   - moved color-backgrounds out of "images" folder to "bgs" folder.

# masenko-gohan
![masenko-gohan](http://vignette3.wikia.nocookie.net/dragonball/images/a/a3/021-18.jpg/revision/latest/scale-to-width-down/180?cb=20110626231457)

###### The following changes were made as suggested by Arjun Singh
 - added responsive "click to choose color" message
 - reduced left and right padding in navbar
 - increased font-size of "color can" in logo to make it visible on mobile
 - responsive "back to top" link

# Flight-gohan
![Flight-gohan](http://vignette3.wikia.nocookie.net/dragonball/images/0/0f/GohanFlyingFriezaEarth.png/revision/latest/scale-to-width-down/180?cb=20100504181055)

###### New Services Page added and following changes are made
- Async Ajax call to display services page
- Added folder views and services.html in the folder
- Added styles for services page
- moved footer out of main container to make it consistent among all the pages

# hyperbolic-time-chamber-gohan
![hyperbolic-time-chamber-gohan](http://vignette2.wikia.nocookie.net/dragonball/images/c/c7/Gohan222.jpg/revision/latest/scale-to-width-down/180?cb=20100710070205)

###### Slide show and other changes suggested by Arjun Singh

- Added 4 rooms with 7 colors in slider
- Added new entry in menu and adjusted width
- Added Cool Caption - "Coloring the Canvas of Life"
- Slowed down the "choose-color" animation in mobiles
- Faster "back-to-top" animation with "hand" instead of "chevron"

# Piccolo-Gohan
![Picalo-Gohan](http://vignette3.wikia.nocookie.net/dragonball/images/9/9e/011-01.jpg/revision/latest?cb=20110626231428)

###### Services Page Updated but not completed

- Removed cards layout
- Added Parllalx Scrolling to services
- Ajax call changed from $().load() to $().html(data) for effecient Dom Parsing
- scrolling text function must be modified

# piccolo-gohan-ii

- fixed Homepage link
- fixed "click-to-change-color" animation on desktop
- added border and margin to slide
- change color-box based on current room
  - moved colorbox images to "bgs" folder to prevent hashing and rename
  - changing colorbox images using javascript

# super-saiyan-gohan
![super-saiyan-gohan](http://vignette2.wikia.nocookie.net/dragonball/images/1/12/FPSSJGohanNewOutfit.png/revision/latest/scale-to-width-down/160?cb=20110804202048)

- resolved readme conflicts merged both piccolo-gohans

# training-super-saiyan-gohan
![training-super-saiyan-gohan](http://vignette2.wikia.nocookie.net/dragonball/images/e/e4/GohanSuperSaiyanMad-1.jpg/revision/latest/scale-to-width-down/180?cb=20110331064457)

###### minor changes before deployment

 - fixed bg issues on front page
 - temporarily fixed bg issues on services page for "Wall Putty and Water Proofing"
 - fixed service mobile font-size
 - added link to logo
 - temporarily reverted back to view.load instead of .html as its causing issues after grunt build

# Monkey-Boy-Gohan
![Monkey-Boy-Gohan](http://fc05.deviantart.net/fs13/f/2007/082/7/b/Son_Gohan_is_happy____by_DjSamerA.jpg)

###### changes in services page

- scrolling experience made better
- Parllalax improved no-js only CSS
- Highlights for Sub Heading
- Added sub menu for services page (Hidden for Mobile)
- Added text for team (Not Completed Yet)

# Monkey-Boy-Gohan-hotfix
![Monkey-Boy-Gohan](http://fc05.deviantart.net/fs13/f/2007/082/7/b/Son_Gohan_is_happy____by_DjSamerA.jpg)

###### Additions in services page and sliders fix

- Bootstrap slider problems fix
- Added team details in services page
- minor changes

# pre-ssj2-gohan
![pre-ssj2-gohan](http://vignette2.wikia.nocookie.net/dragonball/images/b/b7/166-42.jpg/revision/latest/scale-to-width-down/180?cb=20120529164034)

- Reverted back to original palette
- Moved caption to logo
- New BG with 123rf #41204191
- modified testimonials and added h3
- Contact us
 - New styling
 - New Icons (font-awesome from bower)
 - new extras - ihover - injection failed using bower - added required css to main.css

# ssj2-gohan
![ssj2-gohan](http://vignette4.wikia.nocookie.net/dragonball/images/f/fc/Gohan_Super_Saiyan_2.png/revision/latest/scale-to-width-down/180?cb=20120517140838)
###### Polished and finished front page

# teen-gohan
![ssj2-gohan](http://vignette2.wikia.nocookie.net/dragonball/images/d/db/185-33.jpg/revision/latest/scale-to-width-down/180?cb=20120517142819)

- added "overflow-x: hidden" to fix issues on Microsoft Edge :grin:
- new address in "get-in-touch"
- reduced extra images size
- added new testimonial (long one)
- temporarily removed unused social icons
- Added "the team" to front page and redesigned based on suggestions
- Added original BG - 123rf's #41204191
- Added brick-top-border to "Get In Touch"

# Post-teen-gohan
![ssj2-gohan](http://vignette2.wikia.nocookie.net/dragonball/images/d/db/185-33.jpg/revision/latest/scale-to-width-down/180?cb=20120517142819)

- Few changes in services for better mobile experience

# great-saiyaman
![great-saiyaman](http://vignette3.wikia.nocookie.net/dragonball/images/e/ea/VidelAndGohan.jpg/revision/latest/scale-to-width-down/180?cb=20110509193404)

- Changes to services menu
  - removed "team" as it is on front page
  - replaced "/" seperator with "|"
  - changed text color from blue to dark grey
  - removed transparency and added box-shadow
- moved "back-to-top" out of ".view"
- click ".navbar-toggle" on loading view -> to hide the menu in mobiles after loading the view
- added text-shadow to three services
- new images for individual services
 - wall painting - #25751824
 - doodles -  #26846964
 - texture - #40657736

# post-great-saiyaman
![post-great-saiyaman](http://vignette1.wikia.nocookie.net/dragonball/images/a/a9/DBZGSM4.jpg/revision/latest/scale-to-width-down/180?cb=20090408173723)

- minor swappings and css changes
- changed service images
- changed "get-in-touch" grid from small(col-sm) to medium(col-md)
- Rate Card (need to add styling)

# pre-ultimate-gohan
![pre-ultimate-gohan](http://vignette2.wikia.nocookie.net/dragonball/images/7/7f/232-52.jpg/revision/latest/scale-to-width-down/180?cb=20090916202504)

- minor css styling to Rate Card
- fixed dist issues with jquery UI
  - removed from bower css and added to main css
  - moved images req for jquery ui to images/jquery-ui folder and changed links in css file
- added "color-zombies" link and coming soon page

# ultimate-gohan
![ultimate-gohan](http://vignette4.wikia.nocookie.net/dragonball/images/7/79/DBZ_-_Mystic_Gohan_Vs_Super_Buu_000.jpg/revision/latest/scale-to-width-down/200?cb=20090406195856)

## Ready to go Live!
