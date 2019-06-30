const images50x50 = {
  africa: '../../../images/time-zones/50x50/africa.png',
  america: '../../../images/time-zones/50x50/america.png',
  antarctica: '../../../images/time-zones/50x50/antarctica.png',
  artic: '../../../images/time-zones/50x50/artic.png',
  asia: '../../../images/time-zones/50x50/asia.png',
  atlantic: '../../../images/time-zones/50x50/atlantic.png',
  australia: '../../../images/time-zones/50x50/australia.png',
  brazil: '../../../images/time-zones/50x50/brazil.png',
  canada: '../../../images/time-zones/50x50/canada.png',
  chile: '../../../images/time-zones/50x50/chile.png',
  etc: '../../../images/time-zones/50x50/etc.png',
  europe: '../../../images/time-zones/50x50/europe.png',
  indian: '../../../images/time-zones/50x50/indian.png',
  mexico: '../../../images/time-zones/50x50/mexico.png',
  pacific: '../../../images/time-zones/50x50/pacific.png',
  us: '../../../images/time-zones/50x50/us.png',
};

const images100x100 = {
  africa: '../images/time-zones/100x100/africa.png',
  america: '../images/time-zones/100x100/america.png',
  antarctica: '../images/time-zones/100x100/antarctica.png',
  artic: '../images/time-zones/100x100/artic.png',
  asia: '../images/time-zones/100x100/asia.png',
  atlantic: '../images/time-zones/100x100/atlantic.png',
  australia: '../images/time-zones/100x100/australia.png',
  brazil: '../images/time-zones/100x100/brazil.png',
  canada: '../images/time-zones/100x100/canada.png',
  chile: '../images/time-zones/100x100/chile.png',
  etc: '../images/time-zones/100x100/etc.png',
  europe: '../images/time-zones/100x100/europe.png',
  indian: '../images/time-zones/100x100/indian.png',
  mexico: '../images/time-zones/100x100/mexico.png',
  pacific: '../images/time-zones/100x100/pacific.png',
  us: '../images/time-zones/100x100/us.png',
};

const getImagePath = (image, size) => {
  let path = '';

  if (size === '50x50') {
    path = images50x50[image];
  }

  if (size === '100x100') {
    path = images100x100[image];
  }

  return path;
};

export { getImagePath as default };
