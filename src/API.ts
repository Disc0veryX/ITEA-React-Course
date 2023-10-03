import axios from "axios";
// import { profile } from "console";

export interface IProfile {
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface IRepository {
  stargazers_count: number;
}

export interface IPlayer {
  profile: IProfile;
  score: number;
}

export class API {
  // private readonly id: string = 'YOUR_CLIENT_ID';
  // private readonly sec: string = 'YOUR_SECRET_ID';
  // private readonly params: string = `?client_id=${this.id}?client_secret=${this.sec}`;

  private static handlerError(error: Error): void {
    console.error(error);
  }

  private static async getProfile(username: string): Promise<IProfile> {
    return axios.get('https://api.github.com/users/' + username)
      .then(user => user.data)
      .catch((error: Error) => this.handlerError(error));
  }

  private static async getRepos(username: string): Promise<IRepository[]> {
    return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then(repos => repos.data)
      .catch((error: Error) => this.handlerError(error));
  }

  private static getStarCount(repos: IRepository[]): number {
    return repos.reduce((count: number, repo: {stargazers_count: number}): number => count + repo.stargazers_count, 0);
  }

  private static calculateScore(profile: IProfile, repos: IRepository[]): number {
    const followers: number = profile.followers;
    const totalStars: number = this.getStarCount(repos);
    return (followers * 3) + totalStars;
  }

  private static async getUserData(player: string): Promise<void | IPlayer> {
    return Promise.all([
      this.getProfile(player),
      this.getRepos(player)])
      .then(([profile, repos]: [IProfile, IRepository[]]) => ({ profile, score: this.calculateScore(profile, repos) }))
      .catch((error: Error) => this.handlerError(error));
  }

  private static sortPlayers(players: IPlayer[]): IPlayer[] {
    return players.sort(function (a, b) {
        return b.score - a.score;
    });
  }

  public static async battle(players: string[]): Promise<void | IPlayer[]> {
    return Promise.all(players.map((player: string) => this.getUserData(player)))
      .then(results => results !== undefined ? this.sortPlayers(results as IPlayer[]) : undefined)
      .catch((error: Error) => this.handlerError(error));
  }

  public static async fetchPopularRepos(language: string) {
    const encodeURI: string = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
    return axios.get(encodeURI)
      .then((response) => response.data.items);
  }
}