
import { Card } from 'antd';
import { faImage, faVolumeUp, faVideo } from '@fortawesome/free-solid-svg-icons';
import './GalaxyCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GalaxieCard = ({ galaxy}) => {

  const galaxyData = galaxy.data[0];
  
  const galaxyImage = galaxy.links?.length ? galaxy.links[0].href : 'https://i.imgur.com/GHqELEK.jpeg'

  const renderMediaTypeIcon = (mediaType) => {
    const mediaIcon = {
      'image': faImage,
      'video': faVideo,
      'audio': faVolumeUp
    }

    const mediaTranslation = {
      'image': 'Imagen',
      'video': 'Video',
      'audio': 'Audio'
    }

    const icon = mediaIcon[mediaType]
    if (icon) {
        return (
          <div className='icon'>
            <FontAwesomeIcon icon={icon} /> <span>{mediaTranslation[mediaType]}</span>
          </div>
        )
      }
    }
  

  return (
    <Card className="galaxy-card" >
    <h3 className='title'>{galaxyData.title}</h3>
    <div className='image-container'>
    <img src={galaxyImage}  alt={galaxyData.title} />
    </div>
    <div className="info-container">
      {renderMediaTypeIcon(galaxyData.media_type ?? '')}
      <div className='keyword-container'>
        {galaxyData.keywords?.map((keyword, i) => <span className='keyword' key={i}>{keyword}</span>)}
      </div>
      <p className='description'>{galaxyData.description}</p>
    </div>
    </Card>
  );
};

export default GalaxieCard;