import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Mindmap } from '../mindmap';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TMindmapService {

  private baseUrl = '';

  tempUrl: string;

  constructor(
    private http: HttpClient) {

    this.baseUrl = environment.apiUrl;
  }

  getMindmapList(course_id: string): Observable<Mindmap[]> {
    this.tempUrl = this.baseUrl + 'mindmap_id_list/' + course_id;
    return this.http.get<any>(this.tempUrl);
  }

  getMindmap(course_id: string, mind_id: string): Observable<any> {
    this.tempUrl = this.baseUrl + 'mindmap/' + course_id + '/' + mind_id;
    return this.http.get<any>(this.tempUrl);
  }

  // 返回值为根的信息
  createMindmap(course_id: string, mind_id: string, data: string): Observable<any> {
    return this.saveMind(course_id, mind_id, data);
  }

  saveMind(course_id: string, mind_id: string, data: string): Observable<any> {
    this.tempUrl = this.baseUrl + 'save_mindmap/' + course_id + '/' + mind_id;
    return this.http.post<any>(this.tempUrl, data);
  }

  getAccuracy(course_id: string, mind_id: string): Observable<any[]> {
    this.tempUrl = this.baseUrl + 'nodes_value/' + mind_id;
    return this.http.get<any>(this.tempUrl);
  }

  deleteMindmap(mindmap_id: string) {
    this.tempUrl = this.baseUrl + 'mindmap_delete/' + mindmap_id;
    return this.http.delete<any>(this.tempUrl);
  }

}
