function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
    const allWidgets = document.querySelectorAll('section>div')
    allWidgets.forEach((widget, index)=>{
      widget.classList.add('widget')
      widget.setAttribute('tabindex', index + 1)
    }) 

  // 👉 TASK 2 - Build a "Quote of the Day" widget
   const randomIdx = Math.floor(Math.random() * quotes.length)
   const randomQuote = quotes[randomIdx]
   console.log(randomQuote)
   const quote = document.createElement('div')
   const quoteText = randomQuote.quote
   quote.textContent = quoteText
   const widget1 = document.querySelector('.quoteoftheday')
   widget1.appendChild(quote)

   const authordate = document.createElement('div')
   const {author, date} = randomQuote
   authordate.textContent = `${author} in ${date || "an unknown date"}`
   widget1.appendChild(authordate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  const randomVerb1 = verbs[Math.floor(Math.random()* verbs.length)]
  const randomVerb2 = verbs[Math.floor(Math.random()* verbs.length)]

  const randomAdverbs1 = adverbs[Math.floor(Math.random()* adverbs.length)]
  const randomadverbs2 = adverbs[Math.floor(Math.random()* adverbs.length)]

  const randomNoun1 = nouns[Math.floor(Math.random()* nouns.length)]
  const randomNoun2 = nouns[Math.floor(Math.random()* nouns.length)]

  document.querySelector('.corporateSpeak')
    const mumboJumbo = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverbs1} in order to ${randomVerb2} our ${randomNoun2} ${randomadverbs2}.`
    const paragraph = document.createElement('p')
    paragraph.textContent = mumboJumbo
    document.querySelector('.corporatespeak').appendChild(paragraph)
  
    // 👉 TASK 4 - Build a "Countdown" widget
   const countDownWidget = document.querySelector('.countdown')
   let count = 5
   const countdown = document.createElement('p')
   countdown.textContent = `T-minus ${count}...`
   countDownWidget.appendChild(countdown)

   const id =setInterval(()=>{
    if (count === 1){
      countdown.textContent = 'Liftoff! 🚀'
      clearInterval(id)
    } else {
    
    countdown.textContent = `T-minus ${--count}...`
    }
   },1000)

  // 👉 TASK 5 - Build a "Friends" widget
  const person = people[Math.floor(Math.random() * people.length)]
  const personParagraph = document.createElement("p")
  document.querySelector(".friends").appendChild(personParagraph)
  const year = person.dateOfBirth.split('-')[0]
  let friendsSentence = `${person.fname} ${person.lname} was born in ${year} and `

  if(!person.friends.length){
    friendsSentence += 'has no friends.'
  } else{
    friendsSentence += 'is friends with '
    for(let index = 0; index < person.friends.length; index++){
      const friendID = person.friends[index]
      const friend = people.find(p => p.id === friendID)
      const fullName = `${friend.fname} ${friend.lname}`
      let isLastIndex = index === person.friends.length-1
      let isNextToLastIndex = index === person.friends.length-2
      if(isLastIndex){
        friendsSentence += `${fullName}.`
      } else if (isNextToLastIndex){
        friendsSentence += `${fullName} and `
      } else {
        friendsSentence += `${fullName}, `
      }
    }
  }
personParagraph.textContent = friendsSentence

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
