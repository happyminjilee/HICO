package ssafy.hico.domain.transaction.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class FrTransactionResponse {
    private List<ChildFrTranResponse> frTranList;
    private Long totalElements;
    private int totalPages;
}
