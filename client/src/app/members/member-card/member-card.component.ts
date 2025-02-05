import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { Member } from '../../_models/member';
import { RouterEvent, RouterLink } from '@angular/router';
import { LikesService } from '../../_services/likes.service';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MemberCardComponent {

  private likeService = inject(LikesService);

  member = input.required<Member>();

  hasLiked = computed(() => this.likeService.likeIds().includes(this.member().id));


  toggleLike() {
    this.likeService.toggleLike(this.member().id).subscribe({
      next: () => {
        if (this.hasLiked()) {
          this.likeService.likeIds.update(ids => ids.filter(x => x !== this.member().id))
        } else {
          this.likeService.likeIds.update(ids => [...ids, this.member().id])
        }
      }
    })
  }

}
