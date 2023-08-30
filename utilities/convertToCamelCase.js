// What's the best way to handle multiple classes

// Put all variations together and convert it to camelcase?

/* 

.user-thumbnail {
  background: red;
}

.user-thumbnail.large {
  border-radius: 88.24px;
}

becomes

const styles = StyleSheet.create({
  userThumbnail: {
    background: red 
  },
  userThumbnailLarge: { 
    borderRadius :"88.24px"
  }
})

*/

export const convertToCamelCase = (...words: string[]) => {
  return words.map((word, index) => {
    if (index === 0) {
      return word;
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('')
}
