function nestedArrayAndObject() {
    // refactor this to a single line of destructuring...
    const info = {
      title: 'Once Upon a Time',
      protagonist: {
        name: 'Emma Swan',
        enemies:  [
          {name: 'Regina Mills', title: 'Evil Queen'},
          {name: 'Cora Mills', title: 'Queen of Hearts'},
          {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
          {name: 'Zelena', title: 'The Wicked Witch'},
        ],
      },
    };
    
    const {title, protagonist: {name : protagonistName, enemies : [{name : enemyName, title : enemyTitle}]}} = info; // <-- replace the next few `const` lines with this

    return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`;
}
  
