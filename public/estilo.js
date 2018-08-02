import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    font: [{ unit: 'px', value: 400 }, { unit: 'px', value: 15 }, { unit: 'string', value: 'Lato,' }, { unit: 'string', value: 'sans-serif' }],
    lineHeight: [{ unit: 'px', value: 1.8 }],
    color: '#818181'
  },
  h2: {
    fontSize: [{ unit: 'px', value: 24 }],
    textTransform: 'uppercase',
    color: '#303030',
    fontWeight: '600',
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  h4: {
    fontSize: [{ unit: 'px', value: 19 }],
    lineHeight: [{ unit: 'em', value: 1.375 }],
    color: '#303030',
    fontWeight: '400',
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  jumbotron: {
    backgroundColor: '#f4511e',
    color: '#fff',
    padding: [{ unit: 'px', value: 100 }, { unit: 'px', value: 25 }, { unit: 'px', value: 100 }, { unit: 'px', value: 25 }],
    fontFamily: 'Montserrat, sans-serif'
  },
  'container-fluid': {
    padding: [{ unit: 'px', value: 60 }, { unit: 'px', value: 50 }, { unit: 'px', value: 60 }, { unit: 'px', value: 50 }]
  },
  'bg-grey': {
    backgroundColor: '#f6f6f6'
  },
  'logo-small': {
    color: '#f4511e',
    fontSize: [{ unit: 'px', value: 50 }]
  },
  logo: {
    color: '#f4511e',
    fontSize: [{ unit: 'px', value: 200 }],
    'screen&&<w480': {
      fontSize: [{ unit: 'px', value: 150 }]
    }
  },
  thumbnail: {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'string', value: 'none' }],
    borderRadius: '0'
  },
  'thumbnail img': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    marginBottom: [{ unit: 'px', value: 10 }]
  },
  'carousel-controlright': {
    backgroundImage: 'none',
    color: '#f4511e'
  },
  'carousel-controlleft': {
    backgroundImage: 'none',
    color: '#f4511e'
  },
  'carousel-indicators li': {
    borderColor: '#f4511e'
  },
  'carousel-indicators liactive': {
    backgroundColor: '#f4511e'
  },
  'item h4': {
    fontSize: [{ unit: 'px', value: 19 }],
    lineHeight: [{ unit: 'em', value: 1.375 }],
    fontWeight: '400',
    fontStyle: 'italic',
    margin: [{ unit: 'px', value: 70 }, { unit: 'px', value: 0 }, { unit: 'px', value: 70 }, { unit: 'px', value: 0 }]
  },
  'item span': {
    fontStyle: 'normal'
  },
  panel: {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f4511e' }],
    borderRadius: '0 !important',
    transition: 'box-shadow 0.5s'
  },
  'panel:hover': {
    boxShadow: [{ unit: 'px', value: 5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 40 }, { unit: 'string', value: 'rgba(0,0,0, .2)' }]
  },
  'panel-footer btn:hover': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f4511e' }],
    backgroundColor: '#fff !important',
    color: '#f4511e'
  },
  'panel-heading': {
    color: '#fff !important',
    backgroundColor: '#f4511e !important',
    padding: [{ unit: 'px', value: 25 }, { unit: 'px', value: 25 }, { unit: 'px', value: 25 }, { unit: 'px', value: 25 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px'
  },
  'panel-footer': {
    backgroundColor: 'white !important'
  },
  'panel-footer h3': {
    fontSize: [{ unit: 'px', value: 32 }]
  },
  'panel-footer h4': {
    color: '#aaa',
    fontSize: [{ unit: 'px', value: 14 }]
  },
  'panel-footer btn': {
    margin: [{ unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }],
    backgroundColor: '#f4511e',
    color: '#fff'
  },
  navbar: {
    marginBottom: [{ unit: 'px', value: 0 }],
    backgroundColor: '#f4511e',
    zIndex: '9999',
    border: [{ unit: 'px', value: 0 }],
    fontSize: [{ unit: 'px', value: 12 }, { unit: 'string', value: '!important' }],
    lineHeight: [{ unit: 'px', value: 1.42857143 }, { unit: 'string', value: '!important' }],
    letterSpacing: [{ unit: 'px', value: 4 }],
    borderRadius: '0',
    fontFamily: 'Montserrat, sans-serif'
  },
  'navbar li a': {
    color: '#fff !important'
  },
  'navbar navbar-brand': {
    color: '#fff !important'
  },
  'navbar-nav li a:hover': {
    color: '#f4511e !important',
    backgroundColor: '#fff !important'
  },
  'navbar-nav liactive a': {
    color: '#f4511e !important',
    backgroundColor: '#fff !important'
  },
  'navbar-default navbar-toggle': {
    borderColor: 'transparent',
    color: '#fff !important'
  },
  'footer glyphicon': {
    fontSize: [{ unit: 'px', value: 20 }],
    marginBottom: [{ unit: 'px', value: 20 }],
    color: '#f4511e'
  },
  slideanim: {
    visibility: 'hidden'
  },
  slide: {
    animationName: 'slide',
    WebkitAnimationName: 'slide',
    animationDuration: '1s',
    WebkitAnimationDuration: '1s',
    visibility: 'visible'
  }
});
