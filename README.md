# GithubActionTest-Praktikum

<b>How to push local changes to GitHub</b>
<br>
<ins>Step 1:</ins>
Clone repository:
go to Github main page --> click on download code
<br>
https://user-images.githubusercontent.com/69137818/90240921-699b4e80-de2a-11ea-9b77-d617ac4d6122.png
<br>
then copy the link
<br>
Go to terminal --> type: "git clone <the link you just copied>"
<br>
repository is copied now
open it
<br>
<br>
<ins>Step 2:</ins>
Add file:
first add the file you changed
<br>
type: "git add <your file>" to mark changes for commit
<br>
<br>
<ins>Step 3:</ins>
Commit:
type "git commit"
<br>
Then you have to write a short subject an leave a blind line.
Now write exactly what happened in the commit.
<br>
• Why is the change necessary?
• What effect does this change have?
<br>
if finished, esc and type ":wq" to save and exit
<br>
<br>
<ins>Step 4:</ins>
<br>
type "git push -u origin master" to push your local content to GitHub.
<br>
<br>
<br>
<br>
<b>ERRORS</b>
<br>
some Errors and what you can do about it:
<br>
• "Unable to solve reference:"
  https://user-images.githubusercontent.com/69137818/90364255-6390b200-e064-11ea-9d88-0e424ebebc3d.png
<br>
  You get this Error, if your local repository is not up to date.
<br>
  type "git pull" to download content from your repository 
  and update your local repository to match the content.
<br>
  Now try <ins>Step 4</ins> again and it should work. 
<br>
