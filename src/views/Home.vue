<template>
  <v-container style="height: 100%">
    <!-- <hello-world /> -->
    <list :listData="data"/>
  </v-container>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import List from "../components/List";
const message = [
  {
    name: "vue.draggable",
    avatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Prescription02&hairColor=Platinum&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Squint&eyebrowType=Default&mouthType=ScreamOpen&skinColor=DarkBrown",
  },
  {
    name: "draggable",
    avatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Black&eyeType=Close&eyebrowType=Default&mouthType=Twinkle&skinColor=Pale",
  },
  {
    name: "component",
    avatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=Black&clotheType=BlazerShirt&clotheColor=PastelRed&eyeType=Surprised&eyebrowType=UnibrowNatural&mouthType=Twinkle&skinColor=Tanned",
  },
  {
    name: "for",
    avatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Kurt&hairColor=Black&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=ShirtCrewNeck&clotheColor=Pink&eyeType=Hearts&eyebrowType=Angry&mouthType=Sad&skinColor=Brown",
  },
  {
    name: "vue.js 2.0",
    avatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Kurt&hairColor=Auburn&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Pink&eyeType=Wink&eyebrowType=UpDown&mouthType=Concerned&skinColor=Black",
  },
];
export default {
  name: "Home",

  components: {
    // HelloWorld,
    List,
  },
  data(){
    return{
      data:{
          title: "To do",
          id: 0,
          newTask: null,
          items: message.map((element) => {
            return { name: element.name, avatar: element.avatar };
          }),
        },
    }
  }
};
</script>
