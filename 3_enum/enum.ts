enum Membership {
  Simple,
  Strandard,
  Premium
}

const membership = Membership.Simple
const membershipReverse = Membership[2]

console.log(membership);
console.log(membershipReverse);

// -=+=- 

enum SocialMedia {
  VK = 'VK',
  FB = 'FACEBOOK',
  INST = 'INSTAGRAM'
}

const social = SocialMedia.INST;
console.log(social);