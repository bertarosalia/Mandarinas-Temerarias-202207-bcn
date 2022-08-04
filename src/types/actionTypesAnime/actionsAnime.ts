import { ActionTypeAnime } from "./actionsTypesAnime";

export interface AnyActionAnime {
  type: any;
}

export interface ActionAnime extends AnyActionAnime {
  type: ActionTypeAnime;
}

export interface TestingActionAnime extends AnyActionAnime {
  type: string;
}

export interface NextAnimePageAction extends ActionAnime {
  payload: boolean;
}
