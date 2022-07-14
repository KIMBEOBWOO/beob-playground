export interface ArtistService {
  getWork: () => Work;
}

export interface Work {
  totalTime: number;
}
