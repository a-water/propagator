import React, { Component } from 'react';

class SleepToLearn extends Component {

  renderBackgroundVid() {
    return (
      <div className="fullscreen-bg">
        <video 
          loop muted autoPlay 
          poster={ require(`../assets/sleep-to-learn/media/sparkle stairs still.jpg`) } className="fullscreen-bg__video">
          <source 
            src={ require(`../assets/sleep-to-learn/media/sparkle stairs.mp4`) } 
            type="video/mp4" 
          />
        </video>
      </div>
    )
  }

  renderContent() {
    return (
      <div className="sleep-container">
        <article>
          <h1 className="display-1 row justify-content-center">Sleep to Learn</h1>
          <h2 className="row justify-content-center">by i❤️computers</h2>
          <div className="row justify-content-center">
            <div className="col-md-9 col-sm-12 essay round-top">
              <p>I had this dream where my friend Paul had a family deed to a house. Well not the whole house, but a subsection of a house. Another family owned the building and we passed by them while they were eating dinner in the kitchen. They didn’t notice us as we waltzed our way into Paul’s subsection, which was just a living room complete with a bed, a TV, and his musical instruments.</p>

              <p>Without memory, the dream transitioned into Elon Musk performing a fighting demonstration at a martial arts studio. With an oversized uniform, his presence felt like a scene out of Napoleon Dynamite. From there the dream starts to break down and I’m just catching and releasing bugs, but with great difficulty. These damn animals refuse to cooperate and goddammit, this moth bit my finger. It won’t let go!</p>

              <p>When I woke up, questions and realizations arose as I assessed my dream. I can see why some subjects came up in my dream. My friend Paul was visiting; while he was here I caught and released a spider. Heck, I’ve been catching and releasing bugs as long as I’ve lived in this god awful apartment.</p>

              <p> I also remember following Elon Musk closely when he tried to appease to weebs with his anime tweets. Is that why he came up in my dream? But why in a Napoleon Dynamite-esque setting? I haven’t seen that movie in years and has barely been on my mind lately. Wait, moths don’t have mouths to bite with. My mind totally got that wrong. Also, where the hell did Paul go to the bathroom if his subsection didn’t have one?</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              {/* <img src="media/subunit.jpeg" className="img-fluid" alt="Two friends walk to sub-unit. Walking past family at kitchen table."/> */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9 col-sm-12 essay">
              <p>Without rhyme or reason our dreams are a hodgepodge of memories and concepts that lurk in our mind. Robert Stickgold, a sleep researcher, has shown us that our brains explore connections between our memories and concepts even if <a href="https://www.pbs.org/wgbh/nova/article/stickgold-dreams/">"most of these explorations end up being useless or blatantly wrong."</a> However, what is the exact mechanism in our brains that cause these random connections to occur and why do we experience them as the conscious event that are dreams?</p>

              <p>Let’s first explore the mechanism, which is based on memory consolidation. It’s how our brains learn as it takes in short-term memory and transforms them into long-term memory. This process happens when we’re awake, but it also occurs in our sleep. Short-term memories are reactivated in order to be stored for long term storage. This reactivation is key to our dreams. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3079906/">"During all stages of sleep, the mind and brain are" reactivating "new memories [and] consolidating them into long-term storage and integrating recently acquired information with past experience."</a> This would explain why our dreams are a mixture of not just recent memories, but also of the distant past.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              {/* <img src="media/windy%20road.jpeg" className="img-fluid" alt="Drawing of roller coaster road taped to a road barrier sign."/> */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9 col-sm-12 essay">
              <p>In my dreams, I’m usually exploring landscapes. My entire living experience of a specific category of outside spaces are all mushed up and consolidated into a single location. One night I’m in a mall with every shop imaginable. Each store front is distinctive and they are all packed together. Of course, with the imaginative properties of dreams, there are railways that weave through all this decadence. At one spot in the mall, a railway is entirely vertical and a tram passes through the ceiling and down through the floor</p>

              <p>In one dream, my dad is driving me through a freeway interchange with ramps that twist and turn like roller-coasters. In another dream, I am in an apartment complex with a fantastically large center garden. However, this location only serves as a setting for a gunfight battle that I am engaged in. During this battle, I jump to avoid bullets but only to find myself falling toward the garden below.</p>

              <p>When I hit the ground, I wake up in my bed, but I am unable to move. I’m having another episode of sleep paralysis. I have these regularly, but this is a rare one where I notice that someone else is in the room. I hear this man walking up behind me, towards my bed. He then lays down and wraps his arm around me. I try to yell "get off me!" to no avail. I’m locked in. I try to relax, reminding myself that this is still a dream. I wake up, truly, alone in my room.</p>

              <p>These experiences are cloudy in my memory, but in the moment, they felt so vivid. Especially when I’m stuck in sleep paralysis. That mysterious man really felt like he was in my room (it is no wonder that people have, <a href="https://en.wikipedia.org/wiki/The_Nightmare">for the longest time, believed that sleep paralysis was caused by demons</a>). I understand that the source of these dreams are reactivating memories and concepts, but why do I experience them?To understand that, we have to understand consciousness itself and this is where I have to get philosophical.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              {/* <img src="media/sleep%20paralysis.jpeg" className="img-fluid" alt="Drawing of sleep paralysis tucked into bed."/> */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9 col-sm-12 essay round-bottom">
              <p>Your brain is an encoding machine that is based on the stimuli it receives. I see a red strawberry and a pattern is stored in my brain to represent that direct stimuli. Of course, I don’t just look at a red strawberry, I eat it too. I know where to buy a strawberry and I know what other dishes to make with it as an ingredient. Collectively, these thoughts form the concept of a strawberry. With that, not only is my brain storing the pattern for <em>seeing</em> a red strawberry and <em>tasting</em> it, but my brain also stores the pattern for the <em>concept</em> of a strawberry.</p>

              <p>The brian is such a sophisticated encoding mechanism that it will eventually encode patterns of itself. Douglas Hofstadter, a professor of cognitive science and author of "Gödel, Escher, Bach," argues that the root of our consciousness is when the brain encodes its own encoding process; this self-reference forms a <a href="https://www.youtube.com/watch?v=hQsnHkfs3sA">strange loop</a>. Given this strange loopiness, it follows that the conscious experience of dreaming is your brain encoding the memory consolidation process during sleep. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2869395/">"Dreaming may be a reflection of the brain processes supporting sleep-dependent memory processing."</a></p>

              <p>I can’t help but think how much of my day is spent coding and how many stress dreams I’ve had about coding. I also can’t help but notice how, each day, I improve as a programmer. After this dream journal experience and researching for this essay, I have a stronger incentive to put in daily efforts into my other interests: music, art, and language. Put in so much effort that these hobbies of mine will become my dreams.</p>
          </div>
        </div>
      </article>
    </div>
    )
  }

  render() {
    return (
      <div id="sleep-to-learn">
        { this.renderBackgroundVid() }
        { this.renderContent() }
      </div>
    );
  }
}

export default SleepToLearn;