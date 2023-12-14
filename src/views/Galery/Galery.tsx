import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { obtenerImagenes, obtenerVideos } from '../../data/data';
import { MasonryFlashList } from "@shopify/flash-list";
import Video from 'react-native-video';
import { ImageStyle } from 'react-native';

interface Imagen {
  id: number;
  src: { medium: string };
  width: number;
  height: number;
}

interface VideoItem {
  id: number;
  video_files: [{ link: string }];
  width: number;
  height: number;
}

type MediaItem = (Imagen & { isVideo?: false }) | (VideoItem & { isVideo: true });

const Galery: React.FC = () => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);

  useEffect(() => {
    Promise.all([
      obtenerImagenes('Soccer', 50),
      obtenerVideos('Tigers', 10)
    ])
    .then(([imagenesData, videosData]) => {
      const imagenes: MediaItem[] = imagenesData.photos.map((img: Imagen) => ({...img, isVideo: false}));
      const videos: MediaItem[] = videosData.videos.map((vid: VideoItem) => ({...vid, isVideo: true}));
      setMediaItems([...imagenes, ...videos].sort(() => Math.random() - 0.5));  
    })
    .catch((error) => console.error('Error al obtener medios:', error));
  }, []);

  const getMediaStyle = (item: MediaItem) => {
    return item.isVideo
      ? { borderRadius: 10, margin: 1, flex: 1, aspectRatio: item.width / item.height }
      : { borderRadius: 10, margin: 1, flex: 3, aspectRatio: item.width / item.height };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Galería</Text>
      <MasonryFlashList 
        contentContainerStyle={{ backgroundColor: 'lightblue' }}
        data={mediaItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          item.isVideo
            ? <Video repeat muted style={getMediaStyle(item) as ImageStyle} source={{ uri: item.video_files[0].link }} resizeMode="cover" />
            : <Image style={getMediaStyle(item) as ImageStyle} source={{ uri: item.src.medium }} resizeMode="cover" />
        )}
        estimatedItemSize={200}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7, 26, 93, 255)',
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
});

export default Galery;