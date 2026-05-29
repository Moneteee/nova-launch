function renderMember() {
  const container = document.getElementById('memberContainer');
  const levelIcon = member.level === 'Bud' ? '🌱' : (member.level === 'Gold' ? '★' : '◆');
  const nextLevel = member.points >= 500 ? "Diamond" : (member.points >= 200 ? "Gold" : "Bud");
  const percent = Math.min(100, (member.points / 500) * 100);
  const html = `
    <div class="member-hero">
      <h2>${member.isMember ? 'Member Zone' : 'Join GIRLSING'}</h2>
      <p>${member.isMember ? 'Points as cash · Higher tier more benefits' : 'Sign up get 200 points · 10% off first order'}</p>
      ${!member.isMember ? '<button id="registerMemberBtn" class="btn-register">Sign Up Free</button>' : ''}
    </div>
    <div class="points-card">
      <div><div>My Points</div><div class="current-price" style="font-size:2rem;">${member.points}</div><button id="exchangePointsBtn" class="btn-outline">Redeem</button></div>
      <div><div>Member Tier</div><div style="font-size:1.3rem;">${levelIcon} ${member.level}</div><button id="levelGuideBtn" class="btn-outline">Upgrade Guide</button></div>
      <div><div class="level-progress"><div class="level-fill" style="width:${percent}%;"></div></div><div>${member.points}/500 to Diamond</div></div>
    </div>
    <div class="benefits-grid">
      <div class="benefit-item"><h4>Welcome Gift</h4><p>200 points + 10% off</p><button class="btn-outline benefit-claim">Claim</button></div>
      <div class="benefit-item"><h4>Daily Check-in</h4><p>Earn points daily</p><button id="signBtn" class="btn-outline">Check in</button></div>
      <div class="benefit-item"><h4>Birthday Gift</h4><p>Double points + exclusive gift</p><button id="birthdayBtn" class="btn-outline">Set Birthday</button></div>
    </div>
    <div class="points-card"><div><h4>Points History</h4><p>Earn points from sign-up, check-in, purchases</p></div><div><button id="checkOrdersBtn" class="btn-outline">View Orders</button></div></div>
  `;
  container.innerHTML = html;

  document.getElementById('registerMemberBtn')?.addEventListener('click', () => {
    member.isMember = true; member.points = 200; member.level = "Bud";
    localStorage.setItem('girlsing_member', JSON.stringify(member));
    showToast('Sign up successful! You received 200 points');
    renderMember();
  });
  document.getElementById('signBtn')?.addEventListener('click', () => {
    if(member.isMember) {
      member.points += 10;
      member.signDays = (member.signDays||0)+1;
      if(member.signDays % 7 === 0) member.points += 50;
      localStorage.setItem('girlsing_member', JSON.stringify(member));
      showToast('Check-in +10 points');
      renderMember();
    }
  });
  document.getElementById('exchangePointsBtn')?.addEventListener('click', () => showToast('Points mall coming soon'));
  document.getElementById('levelGuideBtn')?.addEventListener('click', () => showToast('Spend $200 to reach Gold, $500 to reach Diamond'));
  document.getElementById('checkOrdersBtn')?.addEventListener('click', () => showToast('No orders yet'));
  document.getElementById('birthdayBtn')?.addEventListener('click', () => {
    const date = prompt('Enter your birthday (MM/DD)');
    if(date) {
      member.birthday = date;
      localStorage.setItem('girlsing_member', JSON.stringify(member));
      showToast(`Birthday set: ${date}. Birthday gift will arrive soon!`);
      renderMember();
    }
  });
  document.querySelectorAll('.benefit-claim').forEach(btn => btn.addEventListener('click', () => showToast('Welcome gift claimed! +200 points')));
}

document.addEventListener('DOMContentLoaded', renderMember);