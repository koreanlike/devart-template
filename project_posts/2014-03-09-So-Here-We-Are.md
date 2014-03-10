# So Here We Are

Developing the first operable prototype of Voicing Type on Processing(Java) environment was a surely remarkable experience, since this was the first time to implement a computational typographic experiment for me. However, it was also an opportunity to face shortcomings of typeface modification algorithms and the running environment.

## Problems

### Typeface Modification Algorithm
![Comparison of Type Modification Algorithm#1](../project_images/Algorithm-comparison.gif?raw=true "Character Comparison of Algorithm: C")
*Left: Algorithm#1, Right: Algorithm#2*
There are two main algorithms that I contemplated using for typeface modification. They do generate distinguishable styles because both algorithm apply forces with different intensity, but there are similar features in typefaces above. Similarity comes from a same principle to modify typefaces, that is applying each frequency value(Hz, force) to each node in a character. Despite of some different parameters to modify, freq-to-node mapping algorithm generates spiky outlines, which sometimes can be attractive but usually aggressive.

![Comparison of Type Modification Algorithm#2](../project_images/Voice-comparison.gif?raw=true "Character Comparison of Voice: C")
*Left: Voice#1, Right: Voice#2*
Another problem was that generated fonts with a same algorithm had too many resemblances, even though people who generated fonts clearly had distinguishing voices. If characters are typed big enough and looked closely, there are differences. However, style resemblances-spikiness- are strong enough to overwhelm the small outline differences. This problem cannot be accepted, because an important feature of Voicing Type was supposed to be 'Your own typeface with your voice! '


### Processing Environment
Don't get me wrong, I love Processing. But unlike installations and artworks that artist can control running environment, Voicing type which is an application/artwork I believe, I had to consider multiple running environments of users. Followings are few problems that I noticed while developing Voicing Type on Processing environment.

- Exported application for MacOS did not run at all.
- There are great libraries for Processing to control graphics, but there are no satisfying GUI libraries designed for end-users. *I missed HTML input tags pretty hard.*