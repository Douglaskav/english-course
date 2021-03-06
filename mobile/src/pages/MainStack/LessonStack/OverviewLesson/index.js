import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

export default function OverviewLesson() {
  const navigation = useNavigation();

  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.Progress progress={0.35} />
        <Styled.Title>Do - Does</Styled.Title>
        <Styled.Description>
          Nesse capítulo conheceremos verbos que funcionam com os auxiliares
          “DO” e “DOES” e que, portanto, seguem regras específicas.
        </Styled.Description>
        <Styled.Br />
        <Styled.Description>
          Verbo To Be, Verbos Modais e os Verbos Do/Does, são as três categorias
          de verbos em inglês.
        </Styled.Description>
        <Styled.ListContainer>
          <Styled.ListItemContainer
            onPress={() => navigation.navigate('video-lesson')}
          >
            <Styled.ListItemLeftIcon name="file-video-o" />
            <Styled.ListItemText>Vídeo Aula</Styled.ListItemText>
            <Styled.ListItemRightIcon name="chevron-right" />
          </Styled.ListItemContainer>
          <Styled.ListItemContainer
            state="success"
            onPress={() => navigation.navigate('audio-lesson')}
          >
            <Styled.ListItemLeftIcon name="file-audio-o" state="success" />
            <Styled.ListItemText state="success">
              Áudio Aula
            </Styled.ListItemText>
            <Styled.ListItemRightIcon name="chevron-right" state="success" />
          </Styled.ListItemContainer>
          <Styled.ListItemContainer
            state="danger"
            onPress={() => navigation.navigate('multiple-choice-lesson')}
          >
            <Styled.ListItemLeftIcon name="file-text-o" state="danger" />
            <Styled.ListItemText state="danger">
              Exercício Objetivo
            </Styled.ListItemText>
            <Styled.ListItemRightIcon name="chevron-right" state="danger" />
          </Styled.ListItemContainer>
          <Styled.ListItemContainer
            onPress={() => navigation.navigate('video-lesson')}
          >
            <Styled.ListItemLeftIcon name="file-video-o" />
            <Styled.ListItemText>Vídeo Aula</Styled.ListItemText>
            <Styled.ListItemRightIcon name="chevron-right" />
          </Styled.ListItemContainer>
          <Styled.ListItemContainer
            onPress={() => navigation.navigate('audio-lesson')}
          >
            <Styled.ListItemLeftIcon name="file-audio-o" />
            <Styled.ListItemText>Áudio Aula</Styled.ListItemText>
            <Styled.ListItemRightIcon name="chevron-right" />
          </Styled.ListItemContainer>
          <Styled.ListItemContainer
            onPress={() => navigation.navigate('multiple-choice-lesson')}
          >
            <Styled.ListItemLeftIcon name="file-text-o" />
            <Styled.ListItemText>Exercício Objetivo</Styled.ListItemText>
            <Styled.ListItemRightIcon name="chevron-right" />
          </Styled.ListItemContainer>
        </Styled.ListContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}
