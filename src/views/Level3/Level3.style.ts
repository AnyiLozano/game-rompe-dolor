import {StyleSheet} from 'react-native';

const Level3Styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  header: {
    width: '93.5%',
    marginLeft: '3.2%',
    marginTop: '2.4%',
  },
  body: {
    position: 'absolute',
    right: '4.3%',
    top: '17.4%',
  },
  container: {
    width: '72%',
    height: '67.6%',
    marginLeft: '4%',
  },
  downBar: {
    position: 'absolute',
    bottom: '0%',
    width: '100%',
    zIndex: 1,
  },
  arrow: {
    width: '30%',
    height: '30%',
    backgroundColor: 'red',
  },
  backIcon: {
    position: 'absolute',
    bottom: '1.5%',
    right: '15%',
    zIndex: 20,
    borderRadius: 20,
    backgroundColor: '#C215FF50',
  },
  nextIcon: {
    position: 'absolute',
    bottom: '1.5%',
    right: '5%',
    zIndex: 20,
    borderRadius: 20,
    backgroundColor: '#C215FF50',
    fill: '#fff',
  },
  guns: {
    position: 'absolute',
    zIndex: 10,
    bottom: '2%',
    right: '23%',
    fontSize: 18,
    fontWeight: '600',
    width: '15%',
  },
  secondCapsule: {
    position: 'absolute',
    bottom: '9%',
    left: '42%',
    zIndex: 1,
  },
  thirdCapsule: {
    position: 'absolute',
    bottom: '9%',
    left: '37%',
    zIndex: 1,
  },
  fourCapsule: {
    position: 'absolute',
    bottom: '9%',
    left: '32%',
    zIndex: 1,
  },
});

export default Level3Styles;
