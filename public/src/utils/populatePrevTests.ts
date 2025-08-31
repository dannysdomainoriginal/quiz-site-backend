import dom from './dom.js'

const populatePrevTests = (arr: any[]) => {

  if ( arr.length == 0 ) return

  const testsContainer = dom('.previous-tests-container') as HTMLDivElement

  testsContainer.innerHTML = ''
  arr.forEach(test => {
    testsContainer.innerHTML +=
    `
      <div class="prev-test">
        <div class="score">
          <span class="big">${test.score}</span>
          <span class="small">/20</span>
        </div>

        <div class="date">${test.date}</div>
      </div>
    `
  });
  
}

export default populatePrevTests