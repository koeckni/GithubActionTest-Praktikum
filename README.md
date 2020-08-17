# GithubActionTest-Praktikum

<b>How to push local changes to GitHub</b>

<ins>Step 1:</ins>
Clone repository:
go to Github main page --> click on download code

https://user-images.githubusercontent.com/69137818/90240921-699b4e80-de2a-11ea-9b77-d617ac4d6122.png

then copy the link

Go to terminal --> type: "git clone <the link you just copied>"
  
repository is copied now
open it


<ins>Step 2:</ins>
Add file:
first add the file you changed

type: "git add <your file>" to mark changes for commit
  
  
<ins>Step 3:</ins>
Commit:
type "git commit"

Then you have to write a short subject an leave a blind line.
Now write exactly what happened in the commit.

• Why is the change necessary?
• What effect does this change have?

if finished, esc and type ":wq" to save and exit


<ins>Step 4:</ins>

type "git push -u origin master" to push your local content to GitHub.




<b>ERRORS</b>

some Errors and what you can do about it:

• "Unable to solve reference:"
  https://user-images.githubusercontent.com/69137818/90364255-6390b200-e064-11ea-9d88-0e424ebebc3d.png

  You get this Error, if your local repository is not up to date.

  type "git pull" to download content from your repository 
  and update your local repository to match the content.

  Now try <ins>Step 4</ins> again and it should work. 
